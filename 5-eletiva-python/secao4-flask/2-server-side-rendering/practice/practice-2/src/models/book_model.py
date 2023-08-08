class Book:
    def __init__(self, title: str, author: str, year: int) -> None:
        self.title = title
        self.author = author
        self.year = year


book = Book("Chamado de Cthulhu", " Paul Fricker", 2021)
