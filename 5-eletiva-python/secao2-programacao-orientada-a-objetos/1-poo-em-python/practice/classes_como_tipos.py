# 9- Crie as classes Motocicleta e Caminhao e inicialize as duas com o atributo velocidade_maxima.

# 10- Utilize as classes criadas no exercício anterior para criar uma função print_velocidade_maxima que recebe um objeto e imprime a velocidade máxima dele.
# Retorne uma mensagem de erro com um TypeError caso o veículo passado como argumento não seja uma motocicleta.


class Motocicleta:
    def __init__(self, velocidade_maxima) -> None:
        self.velocidade_maxima = velocidade_maxima


class Caminhao:
    def __init__(self, velocidade_maxima) -> None:
        self.velocidade_maxima = velocidade_maxima


def print_velocidade_maxima(objeto):
    if isinstance(objeto, Motocicleta):
        print(
            f"A velocidade máxima do veículo é de {objeto.velocidade_maxima}"
        )
    else:
        raise TypeError("O objeto precisa ser uma motocicleta")


cg_150 = Motocicleta("120 km/h")
yamaha_R1 = Motocicleta("300 km/h")
ford_C_2042 = Caminhao("140 km/h")

print_velocidade_maxima(cg_150)
print_velocidade_maxima(yamaha_R1)
print_velocidade_maxima(ford_C_2042)
