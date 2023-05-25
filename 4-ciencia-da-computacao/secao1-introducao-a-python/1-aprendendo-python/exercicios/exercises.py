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

# 5- Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).

def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price

paint_costs(100)