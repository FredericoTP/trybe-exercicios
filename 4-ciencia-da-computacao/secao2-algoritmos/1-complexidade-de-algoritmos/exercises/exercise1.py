# Dado um array de números de tamanho n, escreva um algoritmo que retorna true se há no array um número duplicado e false caso contrário. Analise a solução e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


# Melhor caso: 0(1)
# Caso Médio: 0(n)
# Pior Caso: 0(n)
