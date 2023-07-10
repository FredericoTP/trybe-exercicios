# Crie uma classe GastoMensal que contenha os seguintes atributos:
# internet: público supermercado: público luz: protegido agua:protegido aluguel: privado

# Utilize o código que você criou no exercício anterior e crie os métodos get e set para os atributos luz e agua.


class GastoMensal:
    def __init__(
        self,
        internet: float,
        supermercado: float,
        luz: float,
        agua: float,
        aluguel: float,
    ) -> None:
        self.internet = internet
        self.supermercado = supermercado
        self._luz = luz
        self._agua = agua
        self.__aluguel = aluguel

    @property
    def agua(self) -> float:
        return self._agua

    @agua.setter
    def agua(self, valor: float):
        self._agua = valor

    @property
    def luz(self) -> float:
        return self._luz

    @luz.setter
    def luz(self, valor: float):
        self._luz = valor


gastos = GastoMensal(100.00, 150.00, 80.00, 120.00, 1000.00)
print(gastos.luz)
print(gastos.agua)
gastos.luz = 200.00
gastos.agua = 300.00
print(gastos.luz)
print(gastos.agua)
