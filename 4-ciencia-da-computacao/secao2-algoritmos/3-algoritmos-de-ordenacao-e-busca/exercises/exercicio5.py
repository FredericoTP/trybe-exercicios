def binary_search(numbers, target):
    start = 0
    end = len(numbers) - 1

    while start <= end:
        mid = (start + end) // 2

        if numbers[mid] == target:
            return mid

        if target < numbers[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1


numbers = [2, 3, 4, 10, 40]
target = 40

print(binary_search(numbers, target))
