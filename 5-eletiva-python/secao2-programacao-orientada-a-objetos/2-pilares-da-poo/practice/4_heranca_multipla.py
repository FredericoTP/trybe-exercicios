# Utilize a sua solução do exercício anterior e faça um mixin que conterá um método para mostrar a velocidade que o cachorro está correndo.


class Animal:
    def __init__(self, nome) -> None:
        self.nome = nome

    def fazer_som(self) -> None:
        print(f"{self.nome} fazendo som")


class Mamifero(Animal):
    def amamentar(self) -> None:
        print(f"{self.nome} está amamentando")


class MixinCorrer:
    def correr(self, velocidade: int) -> None:
        print(f"{self.nome} está correndo á {velocidade} km/h")


class Cachorro(Mamifero, MixinCorrer):
    def latir(self) -> None:
        print(f"{self.nome} faz au au!")


cachorro = Cachorro("Babalu")
cachorro.fazer_som()
cachorro.amamentar()
cachorro.latir()
cachorro.correr(10)
