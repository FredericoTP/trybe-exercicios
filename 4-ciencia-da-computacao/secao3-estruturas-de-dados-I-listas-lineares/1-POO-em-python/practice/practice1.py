# Para fixar crie uma objeto da classe Ventilador, semelhante ao exemplo do liquidificador.


class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__ligado = True

    def desligar(self):
        self.__velocidade = 0
        self.__ligado = False

    def esta_ligado(self):
        return self.__ligado

    def __str__(self) -> str:
        return f"""
        Cor: {self.cor}
        Preço: {self.preco}
        """


# Em seguida faça com que a pessoa tenha um ventilador como atributo através da composição.
# Crie também um método comprar_ventilador.
# Faça com que o print (__str__) de Pessoa informe se sua instância possui ou não um ventilador.


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        return f"""
        {self.nome} - possui {self.saldo_na_conta}
        Ventilador: {self.ventilador}
        """


ventilador1 = Ventilador("Azul", 10, 2, 200)

pessoa1 = Pessoa("Fred", 2000)
pessoa1.comprar_ventilador(ventilador1)
print(pessoa1)
