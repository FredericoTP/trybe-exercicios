# Crie uma classe Animal com um atributo nome e um método fazer_som que imprime “Animal fazendo som”.
# Depois, crie uma classe Mamifero que herda de Animal e tenha um método amamentar.
# Por fim, crie uma classe Cachorro que herda de Mamifero e tenha um método latir e imprima “Au au!”.


class Animal:
    def __init__(self, nome) -> None:
        self.nome = nome

    def fazer_som(self) -> None:
        print(f"{self.nome} fazendo som")


class Mamifero(Animal):
    def amamentar(self) -> None:
        print(f"{self.nome} está amamentando")


class Cachorro(Mamifero):
    def latir(self) -> None:
        print(f"{self.nome} faz au au!")


cachorro = Cachorro("Babalu")
cachorro.fazer_som()
cachorro.amamentar()
cachorro.latir()
