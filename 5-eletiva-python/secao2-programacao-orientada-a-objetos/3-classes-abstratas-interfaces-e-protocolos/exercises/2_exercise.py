# Você deve criar um sistema para gerenciamento de serviços de entrega.
# Para isso, deverá ter uma interface chamada Entregavel que precisa conter um método chamado entregar.
# Essa interface vai ser implementada pelas classes Correios e Transportadora.
# O método entregar deverá receber como parâmetro um objeto da classe Cliente e um objeto da classe Endereco.
# Além disso, o método precisa imprimir uma mensagem informando que o serviço foi entregue com sucesso.
# Siga os passos a seguir para a construção.
#    Crie uma classe chamada Cliente com os atributos nome e telefone.
#    Crie uma classe chamada Endereco com os atributos rua, numero, bairro, cidade e estado.
#    Crie uma classe chamada Correios que implemente a interface Entregavel.
#    Crie uma classe chamada Transportadora que implemente a interface Entregavel.
#    Crie uma classe chamada Main com um método main que instancie um objeto de cada uma das classes Correios e Transportadora. Em seguida, crie um objeto da classe Cliente e um objeto da classe Endereco. Por fim, utilize o método entregar dos objetos Correios e Transportadora passando como parâmetro o objeto Cliente e o objeto Endereco.


from abc import ABC, abstractmethod


class Cliente:
    def __init__(self, nome: str, telefone: str) -> None:
        self.nome = nome
        self.telefone = telefone


class Endereco:
    def __init__(
        self, rua: str, numero: int, bairro: str, cidade: str, estado: str
    ) -> None:
        self.rua = rua
        self.numero = numero
        self.bairro = bairro
        self.cidade = cidade
        self.estado = estado


class Entregavel(ABC):
    @abstractmethod
    def entregar(self, cliente: Cliente, endereco: Endereco) -> str:
        ...


class Correios(Entregavel):
    def entregar(self, cliente: Cliente, endereco: Endereco) -> str:
        return (
            f"O produto foi entregue ao cliente {cliente.nome} "
            f"no esdereço: "
            f"{endereco.rua}, {endereco.numero}, {endereco.bairro} - "
            f"{endereco.cidade}, {endereco.estado}."
        )


class Transportadora(Entregavel):
    def entregar(self, cliente: Cliente, endereco: Endereco) -> str:
        return (
            f"O produto foi entregue ao cliente {cliente.nome} "
            f"no esdereço: "
            f"{endereco.rua}, {endereco.numero}, {endereco.bairro} - "
            f"{endereco.cidade}, {endereco.estado}."
        )


class Main:
    def main(self) -> None:
        correios = Correios()
        transportadora = Transportadora()

        cliente = Cliente("Fred", "99999-9999")
        endereco = Endereco(
            "Xablau", 999, "Xablesco", "Belo Horizonte", "Minas Gerais"
        )

        print(correios.entregar(cliente, endereco))
        print(transportadora.entregar(cliente, endereco))


if __name__ == "__main__":
    Main().main()
