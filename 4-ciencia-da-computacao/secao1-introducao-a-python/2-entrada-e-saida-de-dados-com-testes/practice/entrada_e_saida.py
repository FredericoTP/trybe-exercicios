# 1- Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical.

name = input("Qual o seu nome? ")

for letra in name:
    print(letra)

# 2- Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.

numbers = input("Digite números naturais com um espaço entre eles: ")

numbers_list = numbers.split(" ")

soma = 0
for number in numbers_list:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} não é um dígito.")
    else:
        soma += int(number)

print(f"A soma dos valores válidos é: {soma}")
