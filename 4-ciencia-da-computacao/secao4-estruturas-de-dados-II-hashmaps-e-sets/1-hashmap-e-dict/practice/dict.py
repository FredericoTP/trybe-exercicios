# 5- Consulte a forma de se criar um dicionário chamado de dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.

double = {index: index * 2 for index in range(3, 21)}

# print(double)

# 6- Dada uma string, construa um dicionário com a contagem de cada caractere da palavra.


def count_char(string):
    count = {}

    for letter in string:
        if letter not in count:
            count[letter] = 1
        else:
            count[letter] += 1

    return count


# print(count_char("bbbbaaaacccaaaaaaddddddddccccccc"))
# print(count_char("coxinha"))
