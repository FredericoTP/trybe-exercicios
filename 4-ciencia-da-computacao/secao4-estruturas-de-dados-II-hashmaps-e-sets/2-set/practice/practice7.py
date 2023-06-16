from conjunto import Conjunto

# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a Trybe!
# Em um determinado módulo, os estudantes precisam entregar dois trabalhos para seguir adiante.
# Cada vez que um dos trabalhos é entregue, o nome da pessoa fica registrado.
# Precisamos saber como está o andamento da entrega das listas.
# Para isso, você tem acesso aos nomes das pessoas da turma, bem como ao log de quem já entregou qual lista.
# A partir das listas abaixo, utilize a classe já criada e imprima os resultados das perguntas abaixo:

# Quem ainda não entregou a lista1?
# Quem já entregou as duas listas?
# Quem já entregou qualquer uma das duas listas?
# Quem ainda não entregou nenhuma das listas?

estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]

conjunto_estudantes = Conjunto(len(estudantes))
for element in estudantes:
    conjunto_estudantes.add(element)

conjunto_lista1 = Conjunto(len(estudantes))
for element in lista1_entregues:
    conjunto_lista1.add(element)

conjunto_lista2 = Conjunto(len(estudantes))
for element in lista2_entregues:
    conjunto_lista2.add(element)

print(
    "Não entregaram a lista 1:",
    conjunto_estudantes.difference(conjunto_lista1),
)

print(
    "já entregaram as duas listas: ",
    conjunto_lista1.intersection(conjunto_lista2),
)

print(
    "já entregaram qualquer uma das listas: ",
    conjunto_lista1.union(conjunto_lista2),
)

print(
    "Não entregaram nenhuma lista: ",
    conjunto_estudantes.difference(conjunto_lista1.union(conjunto_lista2)),
)
