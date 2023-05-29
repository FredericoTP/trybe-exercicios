import random

# Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?


def random_numbers(n):
    array1 = []

    for number1 in range(0, 100):
        array2 = []

        for number2 in range(0, n + 1):
            array2.append(random.randint(0, n))

        sum_numbers = sum(array2)
        med = sum_numbers / len(array2)
        array1.append(med)

    return array1


print(random_numbers(50))


# Ordem de tempo = 0(n²)
# Ordem de espaço = 0(1)
