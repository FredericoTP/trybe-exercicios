from abc import ABC, abstractmethod
from math import pi as PI

# Com base no diagrama passado, implemente as classes das figuras geométricas.


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        ...

    @abstractmethod
    def perimetro(self):
        ...


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return self.base * 2 + self.altura * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * self.raio**2

    def perimetro(self):
        return 2 * PI * self.raio


quadrado = Quadrado(5)
retangulo = Retangulo(5, 2)
circulo = Circulo(3)

print(quadrado.area(), quadrado.perimetro())
print(retangulo.area(), retangulo.perimetro())
print(circulo.area(), circulo.perimetro())
