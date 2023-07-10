# Crie a seguinte estrutura:
# Uma classe Produto com os atributos nome e preco e os métodos descrever e preco;
# Uma classe Livro que herda de Produto e tem os mesmos atributos da superclasse mais o atributo autor e os métodos descrever e preco;
# Uma classe DVD que herda de Produto e tem os mesmos atributos da superclasse mais o atributo diretor e os métodos descrever e preco.

# Agora, crie uma função imprimir_detalhes para mostrar na tela informações sobre os seguintes produtos
# Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99)
# DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)


class Produto:
    def __init__(self, nome: str, preco: float) -> None:
        self.nome = nome
        self.preco = preco

    def descrever(self) -> str:
        return f"O produto {self.nome} custa {self.preco} reais"

    def preço(self) -> float:
        return self.preco


class Livro(Produto):
    def __init__(self, nome: str, autor: str, preco: float) -> None:
        super().__init__(nome, preco)
        self.autor = autor

    def descrever(self) -> str:
        return f"O Livro {self.nome} foi escrito por {self.autor}"


class DVD(Produto):
    def __init__(self, nome: str, diretor: str, preco: float) -> None:
        super().__init__(nome, preco)
        self.diretor = diretor

    def descrever(self) -> str:
        return f"O DVD {self.nome} foi dirigido por {self.diretor}"


def imprimir_detalhes(produto: Produto):
    print(f"Descrição: {produto.descrever()}")
    print(f"Preço: {produto.preço()}")


produtos = [
    Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99),
    DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99),
]

for produto in produtos:
    imprimir_detalhes(produto)
