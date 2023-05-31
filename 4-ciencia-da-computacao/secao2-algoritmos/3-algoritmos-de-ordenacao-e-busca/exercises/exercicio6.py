# Para descobrirmos qual commit introduziu um erro no sistema, precisamos voltar no tempo verificando os commits antigos, de modo a descobrir um commit em que os testes falham. Supondo que isto será representado como um array de booleanos, descubra o índice onde o erro ocorreu pela primeira vez.
# Como os testes demoram a rodar, resolva o problema rodando o mínimo de testes possíveis.

# Busca Linear


# def find_error(array):
#     n = len(array)
#     for index in range(0, n):
#         if array[index] is False:
#             return index

#     return -1


# Busca Binária


def find_first_bad_version(array):
    low_index = 0

    high_index = len(array) - 1

    while high_index >= low_index:
        middle_index = (high_index + low_index) // 2

        if array[middle_index] is False:
            high_index = middle_index - 1

        else:
            low_index = middle_index + 1

    return low_index


array1 = [True, True, True, True, False, False, False]
array2 = [True, True, False, False, False, False, False]

print(find_first_bad_version(array1))
print(find_first_bad_version(array2))
