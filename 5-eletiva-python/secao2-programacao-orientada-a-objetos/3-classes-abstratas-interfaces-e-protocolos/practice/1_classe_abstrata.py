# Crie uma classe abstrata base chamada Pessoa que contenha um método abstrato chamado imprimir_cargo.
# Além disso, crie duas subclasses que terão implementações concretas da classe base abstrata.
# São elas: Vendedor e Gerente.
# O método imprimir_cargo deverá imprimir “Meu cargo é de vendedor” e “Meu cargo é de gerente” respectivamente.

from abc import ABC, abstractmethod


class Pessoa(ABC):
    @abstractmethod
    def imprimir_cargo(self):
        ...


class Vendedor(Pessoa):
    def imprimir_cargo(self):
        print("Meu cargo é de vendedor")


class Gerente(Pessoa):
    def imprimir_cargo(self):
        print("Meu cargo é de gerente")


vendedor = Vendedor()
gerente = Gerente()

vendedor.imprimir_cargo()
gerente.imprimir_cargo()
