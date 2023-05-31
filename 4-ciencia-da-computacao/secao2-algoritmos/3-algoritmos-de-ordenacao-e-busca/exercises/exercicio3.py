from random import shuffle
from cronometro import Cronometro

# Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias. Em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.


def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1):
        min_element_index = index

        for search_index in range(index + 1, n):
            if numbers[search_index] < numbers[min_element_index]:
                min_element_index = search_index

        current_element = numbers[index]
        numbers[index] = numbers[min_element_index]
        numbers[min_element_index] = current_element

    return numbers


def insertion_sort(numbers):
    n = len(numbers)

    for index in range(1, n):
        key = numbers[index]
        new_position = index - 1

        while new_position >= 0 and numbers[new_position] > key:
            numbers[new_position + 1] = numbers[new_position]
            new_position = new_position - 1

        numbers[new_position + 1] = key

    return numbers


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in (10_000, 100_000, 1_000_000):
        sorted_numbers = list(range(input))

        reversed_sorted_numbers = list(reversed(sorted_numbers))

        random_numbers = sorted_numbers[:]  # copia dos ordenados

        shuffle(random_numbers)  # embaralha eles

        with Cronometro(
            f"{algorithm_name} com entrada" + f"ordenada de {input} números"
        ):
            algorithm(sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada"
            + f"inversamente ordenada de {input} números"
        ):
            algorithm(reversed_sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada" + f"aleatória de {input} números"
        ):
            algorithm(random_numbers)

        print("*" * 50)
