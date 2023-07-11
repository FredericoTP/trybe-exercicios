# Crie um protocolo chamado CalculaPerimetro que contenha um método abstrato chamado calcular_perimetro.
# Crie uma classe chamada Quadrado que implemente o protocolo CalculaPerimetro e o método calcular_perimetro para calcular o perímetro do quadrado.


from typing import Protocol


class CalculaPerimetro(Protocol):
    def calcular_perimetro(self):
        ...


class Quadrado(CalculaPerimetro):
    def __init__(self, lado: int) -> None:
        self.lado = lado

    def calcular_perimetro(self):
        return f"O prímetro do quadrado é de {self.lado * 4} cm"


quadrado = Quadrado(5)
print(quadrado.calcular_perimetro())
