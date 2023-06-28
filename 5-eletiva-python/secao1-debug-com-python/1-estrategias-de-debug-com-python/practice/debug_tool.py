from math import factorial


def map_factorial(numbers):
    result = []

    for num in numbers:
        result.append(factorial(num))

    return result


def main():
    input_list = [1, 2, 3, 4, 5]
    return map_factorial(input_list)


if __name__ == "__main__":
    main()


# 1- Qual a importância de debugar o código?
# Debugar o código é importante para encontrar erros e bugs e poder corrigi-los. Além disso, esse processo possibilita entender melhor o fluxo do código e como ele funciona.

# 2- Quais são as formas mais comuns de debugar código em Python?
# As formas mais comuns de debugar código em Python são usar o print e o debugger, em especial o embutido do VS Code.

# 3- Quais as vantagens de usar debugger do VS Code?
# É possível parar a execução do código em um ponto específico.
# É possível executar o código passo a passo.
# É possível visualizar o valor das variáveis em cada passo da execução do código.
# É possível executar o código em modo de debug sem precisar alterar o código.

# 4- Descubra qual exceção é levantada se um dos elementos da input_list for um inteiro negativo.
# A exceção levantada é ValueError: factorial() not defined for negative values.

# 5- Descubra qual exceção é levantada se um dos elementos da input_list for uma string.
# A exceção levantada é TypeError: 'str' object cannot be interpreted as an integer.
