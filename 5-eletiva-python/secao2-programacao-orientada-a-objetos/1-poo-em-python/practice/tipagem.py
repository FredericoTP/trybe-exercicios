# 1- Modifique o código abaixo para que ele seja tipado corretamente.
# def add_two_numbers(num1, num2):
#     return num1 + num2


def add_two_numbers(num1: int, num2: int) -> int:
    return num1 + num2


# 2- Modifique o código abaixo para que ele seja tipado corretamente.
# class Pessoa:
#     def __init__(self, nome, idade, altura):
#         self.nome = nome
#         self.idade = idade
#         self.altura = altura


class Pessoa:
    def __init__(self, nome: str, idade: int, altura: float) -> None:
        self.nome = nome
        self.idade = idade
        self.altura = altura
