# 1- Crie uma função que receba dois números e retorne o maior deles.

def max_number(num1, num2):
    return max(num1, num2)

max_number(1, 2)

# 2- Calcule a média aritmética dos valores contidos em uma lista.

def average_number(list):
    count = 0
    for number in list:
        count += number
    return count / len(list)

numbers = [1, 2, 3, 4 ,5]

average_number(numbers)