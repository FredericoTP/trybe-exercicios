# 1- Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:
# a- lê todas essas informações;
# b- aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# c- escreva seus nomes em outro arquivo.

recovery_students = []
with open("estudante_nota.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recovery_students.append(student_grade[0] + "\n")


with open("estudante_reprovado.txt", mode="w") as recu_students_file:
    print(recovery_students)
    recu_students_file.writelines(recovery_students)
