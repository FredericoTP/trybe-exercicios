# Você trabalha em uma empresa que desenvolve sistemas de gestão para empresas de diversos segmentos.
# Então, o seu gerente de projetos pediu a você que desenvolvesse uma classe abstrata chamada Funcionario que servirá de base para as classes Programador, Analista e Gerente.
# Nessa classe abstrata deverá conter um método abstrato chamado calcularBonificacao a ser implementado nas classes filhas.
# Então, o método calcularBonificacao deverá retornar o valor do salário do funcionário acrescido de um bônus, que precisa ser calculado da seguinte forma:
#    Para o Programador o bônus será de 20% do salário;
#    Para o Analista o bônus será de 30% do salário;
#    Para o Gerente o bônus será de 40% do salário;
#    Para as demais funções o bônus será de 10% do salário.
# Crie uma classe chamada Main com um método main que instancie um objeto de cada uma das classes filhas. Além disso, ele devem imprimir o valor do salário e da bonificação de cada um deles.


from abc import ABC, abstractmethod


class Funcionario(ABC):
    def __init__(self, nome: str, salario: float) -> None:
        self.nome = nome
        self.salario = salario

    @abstractmethod
    def calcularBonificacao(self, salario: float) -> str:
        ...


class Programador(Funcionario):
    def calcularBonificacao(self) -> str:
        return (
            f"O salário do programador {self.nome} "
            f"com a bonificação é de R${(self.salario * 1.2):.2f}"
        )


class Analista(Funcionario):
    def calcularBonificacao(self) -> str:
        return (
            f"O salário do Analista {self.nome} "
            f"com a bonificação é de R${(self.salario * 1.3):.2f}"
        )


class Gerente(Funcionario):
    def calcularBonificacao(self) -> str:
        return (
            f"O salário do Gerente {self.nome} "
            f"com a bonificação é de R${(self.salario * 1.4):.2f}"
        )


class Colaborador(Funcionario):
    def calcularBonificacao(self) -> str:
        return (
            f"O salário do Colaborador {self.nome} "
            f"com a bonificação é de R${(self.salario * 1.1):.2f}"
        )


class Main:
    def main(self):
        programador = Programador("Rafa", 1500)
        print(programador.calcularBonificacao())

        analista = Analista("Maria", 1600)
        print(analista.calcularBonificacao())

        gerente = Gerente("José", 1800)
        print(gerente.calcularBonificacao())

        colaborador = Colaborador("Isabel", 1200)
        print(colaborador.calcularBonificacao())


if __name__ == "__main__":
    Main().main()
