# Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.


def sum_numbers(n):
    if n <= 1:
        return 1
    else:
        return n + sum_numbers(n - 1)


print(sum_numbers(5))
