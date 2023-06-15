# Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa.
# Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria.
# Isso significa que uma pessoa que não tem nenhuma equipe tem score 1.
# Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.
# Escreva um método que calcule o score de uma determinada pessoa.

dict_subordinados = {1: [2, 3], 2: [4], 3: [], 4: [5, 6], 5: [7], 6: [], 7: []}


def score(subordinados, pessoa):
    count = 1

    for subordinado in subordinados[pessoa]:
        count += score(subordinados, subordinado)

    return count


for index in range(1, 8):
    print(f"Pessoa {index} tem score: {score(dict_subordinados, index)}")
