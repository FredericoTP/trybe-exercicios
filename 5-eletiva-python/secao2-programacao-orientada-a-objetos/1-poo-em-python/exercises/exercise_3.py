# Escreva uma classe que representa um livro com título, autor e número de páginas e tem um método que retorna uma string que descreve o livro.


class Livro:
    def __init__(self, titulo: str, autor: str, paginas: int) -> None:
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def descricao(self) -> str:
        return f"O livro {self.titulo} do autor {self.autor}, possui {self.paginas} páginas."


livro = Livro("Xablau", "Xablesco", 100)

print(livro.descricao())
