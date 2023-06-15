# 1- Instancie a sua classe HashMap e use os objetos Employee para povoá-la. Imprima na tela o nome da pessoa de id_num = 23, acessando a informação a partir da HashMap.

# 2-  A pessoa de id_num = 10 está com o nome errado, deveria ser name30. Implemente um método com a assinatura abaixo, onde id_num é a chave para localizar o registro que queremos alterar e new_name é o nome a ser colocado. Verifique se o seu código está realmente alterando o nome, imprimindo o nome antes e depois da alteração


class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

new_hashmap = HashMap()

for emp in employees:
    new_hashmap.insert(Employee(emp[0], emp[1]))

print(new_hashmap.get_value(23))
print(new_hashmap.get_value(10))
new_hashmap.update_value(10, "name30")
print(new_hashmap.get_value(10))


# 3- Descubra qual técnica de tratamento de colisão é utilizada pelo Dict, de Python e o HashMap, do Java. Em inglês, o termo de busca é “collision resolution“.

# A classe Dict utiliza o Open Addressing e Java utiliza Separate Chaining.

# 4- Como as diferentes implementações afetam a performance? Quais são os prós e contras da implementação de cada linguagem?

# A solução do Python determina o próximo índice a ser visitado de maneira relativamente randômica e resulta em uma complexidade assintótica de tempo de O(1). Por outro lado, para evitar que o vetor buckets fique rapidamente sem espaço, um Dict é inicializado com uma lista de tamanho 2**15 ints. Como em Python cada int ocupa 24 bytes, no mínimo, o uso de memória é considerável.
# Em Java, o tamanho inicial é menor, uma vez que o que tende a crescer são as chains de cada bucket e não a lista de buckets. Por outro lado, temos o trade-off com o custo de tempo. Para cada consulta, o tempo de busca é proporcional à quantidade de itens naquele bucket que, sendo uma árvore, chega a O(log n), sendo n a quantidade de itens naquele bucket.
# Resumindo: Python tem complexidade mais baixa, mas gasta muito espaço. Java utiliza bem melhor a memória, porém tem maior complexidade para consultas.
