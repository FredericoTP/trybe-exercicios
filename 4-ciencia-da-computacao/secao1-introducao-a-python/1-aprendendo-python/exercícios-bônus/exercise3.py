# Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.


def sum_number(number):
    total_numbers = [n for n in range(number + 1)]

    print(sum(total_numbers))


sum_number(6)
