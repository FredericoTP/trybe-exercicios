# Estenda a classe Stack, que escrevemos durante as explicações do conteúdo, adicionando uma nova função chamada min_value() que irá retornar o menor valor inteiro presente na pilha. Faça a análise de complexidade da sua solução.


class Stack:
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"

    def min_value(self):
        if self.is_empty():
            return None

        min_element = self._data[0]
        for element in self._data:
            if element < min_element:
                min_element = element

        return min_element


# complexidade = O(n)
