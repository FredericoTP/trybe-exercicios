# 1- Qual é a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?

# complexidade de tempo é linear O(n)
# complexidade de espaço é constante 0(1)


def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result


# 2- Meça o tempo de execução do algoritmo abaixo e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


meu_array = [1, 2, 3, 4, 5]

multiply_arrays(meu_array, meu_array)


# 3- Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de O(n³)!


def complexidade_cubica(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 + number2 + number3)
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


# 4- Imagine que você recebe dois arrays de tamanho igual, array1 e array2. Para cada elemento do array1, realize uma busca binária no array2. Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n), ou O(n log n).


def binary_search(array2, number):
    start = 0
    end = len(array2) - 1

    while start <= end:
        mid = (start + end) // 2

        if array2[mid] == number:
            return mid

        if number < array2[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1


def check_arrays(array1, array2):
    for number in array1:
        binary_search(array2, number)
