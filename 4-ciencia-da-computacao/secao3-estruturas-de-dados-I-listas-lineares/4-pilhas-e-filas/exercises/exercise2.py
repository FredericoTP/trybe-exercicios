from linked_list import LinkedList

# Crie uma classe Stack, onde deve conter as operações: push, pop, peek e is_empty.


class Stack:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        return self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))
