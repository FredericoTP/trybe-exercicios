# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página.

# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.

produtos = [1, 3, 1, 1, 2, 3]


def combinacao(array):
    total = 0
    tamanho = len(array)

    for index in range(tamanho):
        for index2 in range(index + 1, tamanho):
            if array[index] == array[index2]:
                total += 1

    return total


print(combinacao(produtos))

# Complexidade O(n²)
