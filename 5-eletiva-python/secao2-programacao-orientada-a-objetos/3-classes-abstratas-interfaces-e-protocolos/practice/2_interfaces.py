# Crie uma interface informal em Python chamada Produto, ela deve definir um método abstrato chamado imprimir_preco.
# Caso o método imprimir_preco não seja implementado, lance uma exceção NotImplementedError.
# Crie também uma subclasse Livro, que será o nosso exemplo de Produto nesse exercício e implemente o método imprimir_preco para mostrar o preço do livro na tela.


class Produto:
    def __init__(self, preco: float) -> None:
        self.preco = preco

    def imprimir_preco(self):
        raise NotImplementedError(
            "Classes derivadas de Produto precisam implementar este método"
        )


class Livro(Produto):
    def imprimir_preco(self) -> None:
        print(f"O preço do livro é: {self.preco}")


livro = Livro(7.90)
livro.imprimir_preco()
