# Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções.

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2
# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3
# resultado = [1, 7, 4, 6, 4, 6]


cartas = [1, 4, 4, 7, 6, 6]


def embaralhar(array):
    tamanho = len(array)
    mid = tamanho // 2

    array1 = array[0:mid]
    array2 = array[mid:tamanho]

    embaralhado = []

    for elemento in range(0, len(array1)):
        embaralhado.append(array1[elemento])
        embaralhado.append(array2[elemento])

    return embaralhado


print(embaralhar(cartas))

# Complexidade O(n)


def embaralhar_2(array):
    embaralhado = []
    mid = len(array) // 2

    for element in range(mid):
        embaralhado.extend(array[element::mid])

    return embaralhado


print(embaralhar_2(cartas))

# Complexidade O(n)
