# Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4


def maximo(array):
    contador = 0
    maximo_contador = 0

    for elemento in array:
        if elemento == 0:
            if contador > maximo_contador:
                maximo_contador = contador
            contador = 0
        else:
            contador += 1

    return maximo_contador


print(maximo(valores_coletados2))
