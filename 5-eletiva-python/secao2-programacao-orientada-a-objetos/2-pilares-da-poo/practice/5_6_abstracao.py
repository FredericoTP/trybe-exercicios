# Crie uma classe chamada Retangulo que represente um retângulo com os atributos base e altura.
# A classe deve ter métodos para calcular a área e o perímetro do retângulo.

# Com base no exercício anterior, instancie um objeto da classe Retangulo com os valores base = 5 e altura = 10 e chame os métodos area e perimetro.
# Observe como quem usa a classe não precisa entender como o calculo é feito.


class Retangulo:
    def __init__(self, base: int, altura: int) -> None:
        self.base = base
        self.altura = altura

    def area(self) -> None:
        resultado = self.base * self.altura
        print(resultado)

    def perimetro(self) -> None:
        resultado = self.base * 2 + self.altura * 2
        print(resultado)


retangulo = Retangulo(5, 10)
retangulo.area()
retangulo.perimetro()
