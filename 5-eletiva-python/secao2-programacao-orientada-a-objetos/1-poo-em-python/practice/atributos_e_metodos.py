# 5- Cria uma classe Carro e, depois, atribua valores aos atributos marca, modelo, ano e cor.

# 6- Com base na classe Carro do exercício anterior, crie um método identificar que imprima “Meu carro é um modelo, da marca. Ele é do ano e tem a cor cor“.


def metodo(self) -> None:
    print(
        f"""
        Meu carro é um {self.modelo}, da {self.marca}.
        Ele é do ano {self.ano} e tem a cor {self.cor}
        """
    )


class Carro:
    fala_sobre_carro = metodo


meu_carro = Carro()
meu_carro.marca = "Fiat"
meu_carro.modelo = "Uno de escada"
meu_carro.ano = 2000
meu_carro.cor = "Vermelho"

meu_carro.fala_sobre_carro()
