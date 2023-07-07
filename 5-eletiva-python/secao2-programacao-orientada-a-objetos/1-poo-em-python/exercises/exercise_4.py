# Escreva uma classe que representa um carro com modelo, ano e velocidade e tem métodos que aceleram e desaceleram sua velocidade, e mostre uma mensagem com o modelo, ano e o valor da aceleração ou desaceleração.


class Carro:
    def __init__(self, modelo: str, ano: int) -> None:
        self.modelo = modelo
        self.ano = ano
        self.velocidade = 0

    def acelerar(self, valor: int | float) -> None:
        self.velocidade += valor
        print(
            f"O carro {self.modelo} do ano {self.ano} "
            f"acelera a {self.velocidade} km/h"
        )

    def desacelerar(self, valor: int | float) -> None:
        self.velocidade -= valor
        print(
            f"O carro {self.modelo} do ano {self.ano} "
            f"desacelera a {self.velocidade} km/h"
        )


carro = Carro("Fusca", 1980)
carro.acelerar(20)
carro.desacelerar(10)
