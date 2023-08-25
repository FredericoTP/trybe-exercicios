from rest_framework import serializers
from .models import Client, WorkoutPlan


class NestedWorkoutPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlan
        fields = ["workout"]


class ClientSerializer(serializers.ModelSerializer):
    workout_plan = NestedWorkoutPlanSerializer()

    class Meta:
        model = Client
        fields = ["name", "address", "workout_plan"]

    def create(self, validated_data):
        current_user = self.context["request"].user

        workout_plan_data = validated_data.pop("workout_plan")
        workout_plan_data["personal_trainer"] = current_user
        workout_plan_data["client"] = Client.objects.create(**validated_data)

        NestedWorkoutPlanSerializer().create(validated_data=workout_plan_data)
        return workout_plan_data["client"]

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.address = validated_data.get("address", instance.address)

        workout_plan_data = validated_data.get("workout_plan")
        if workout_plan_data:
            workout_plan_serializer = NestedWorkoutPlanSerializer(
                instance.workout_plan, data=workout_plan_data
            )
            if workout_plan_serializer.is_valid():
                workout_plan_serializer.save()

        instance.save()
        return instance
