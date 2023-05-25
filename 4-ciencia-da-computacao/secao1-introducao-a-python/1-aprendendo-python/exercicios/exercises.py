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

# 3- Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

def square(n):
    for row in range(n):
        print(n * '*')

square(5)

# 4- Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

def biggest_name(list):
    count = 0
    string = ""
    for name in list:
        if len(name) > count:
            count = len(name)
            string = name
    return string

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
biggest_name(names)