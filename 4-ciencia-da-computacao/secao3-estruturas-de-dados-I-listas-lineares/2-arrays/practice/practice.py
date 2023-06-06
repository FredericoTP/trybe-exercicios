# 1- Tipos abstratos de dados possuem uma única implementação bem documentada?

# Não.

# 2- Listas(list), dicionários(dict) e conjuntos(set), que já vêm no Python, são considerados tipos de dados? Caso negativo, justifique sua resposta.

# Sim.

# 3- Que tal adicionarmos um método update que atualiza o valor a partir de um índice?
# A assinatura deve ser def update(self, index, value):


class ListArray:
    def __init__(self):
        self.data = []

    def len(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        return self.data.insert(index, value)

    def remove(self, index):
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value
