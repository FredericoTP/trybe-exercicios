import random

# Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.


def guess_word():
    with open("words.txt", "r") as file:
        words = []
        for word in file:
            new_word = word.replace("\n", "")
            words.append(new_word)

    tries = 3
    word = random.choice(words)
    scrambled_word = "".join(random.sample(word, len(word)))

    while tries > 0:
        guess_user = input(f"Qual a palavra correta? {scrambled_word}: ")
        if guess_user == word:
            print(f"Parabéns, você acertou. A palavra era '{word}'.")
            tries = 0
        elif guess_user != word and tries > 1:
            print("Tente novamente")
            tries -= 1
        else:
            print(f"Que pena! A palavra era '{word}'.")
            tries -= 1


guess_word()
