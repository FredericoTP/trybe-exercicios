# Escreva uma função que recebe uma lista de strings e um caractere e retorna uma lista com as strings que começam com o caractere fornecido.


def word_init(words: list[str], char: str) -> list[str | None]:
    return [word for word in words if word[0] == char]


animais = ["cachorro", "gato", "elefante", "girafa"]
caractere = "g"

print(word_init(animais, caractere))
