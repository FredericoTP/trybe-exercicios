# Transforme o algoritmo criado no exercício 1 em recursivo.


def even(n):
    if n <= 1:
        return 0
    elif n % 2 == 0:
        return 1 + even(n - 1)
    else:
        return 0 + even(n - 1)


print(even(5))
