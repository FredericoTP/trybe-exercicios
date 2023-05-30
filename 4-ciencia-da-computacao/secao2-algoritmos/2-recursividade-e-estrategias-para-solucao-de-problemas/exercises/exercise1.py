# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).


def even(number):
    count = 0

    for n in range(1, number + 1):
        if n % 2 == 0:
            count += 1

    return count


print(even(5))
