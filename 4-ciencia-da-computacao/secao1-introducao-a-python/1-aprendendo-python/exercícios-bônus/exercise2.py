# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base.


def triangle(n):
    for number in range(n + 1):
        print(number * "*")


triangle(10)
