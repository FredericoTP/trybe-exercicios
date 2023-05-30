import random

# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

words = ["abacate", "banco", "regador"]


def guess_word():
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
