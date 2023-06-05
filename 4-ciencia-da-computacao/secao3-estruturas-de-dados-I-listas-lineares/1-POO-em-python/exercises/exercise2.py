from collections import Counter

# Implemente uma classe chamada Estatistica. Ela deve possuir um atributo numbers (uma lista de números) três métodos: um que calcula a média, um que calcula a mediana e outro que calcula a moda de uma lista de números.


class Estatistica:
    def __init__(self, numbers):
        self.__numbers = numbers

    def media(self):
        return sum(self.__numbers) / len(self.__numbers)

    def mediana(self):
        sorted_numbers = sorted(self.numbers)
        mid = len(sorted_numbers) // 2

        if len(sorted_numbers) % 2 == 0:
            return (sorted_numbers[mid - 1] + sorted_numbers[mid]) / 2

        return sorted_numbers[mid]

    def moda(self):
        number, _ = Counter(self.numbers).most_common()[0]

        return number
