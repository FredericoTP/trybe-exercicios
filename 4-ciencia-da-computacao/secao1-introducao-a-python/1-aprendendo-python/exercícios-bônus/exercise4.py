# Um posto está vendendo combustíveis com a seguinte tabela de descontos:

# Álcool:
#  - Até 20 litros, desconto de 3% por litro;
#  - Acima de 20 litros, desconto de 5% por litro.
# Gasolina:
#  - Até 20 litros, desconto de 4% por litro;
#  - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def total_price(litros, tipo):
    if tipo == "A":
        if litros <= 20:
            print(1.9 * litros * 0.97)
        else:
            print(1.9 * litros * 0.95)

    if tipo == "G":
        if litros <= 20:
            print(2.5 * litros * 0.96)
        else:
            print(2.5 * litros * 0.94)


total_price(20, "G")
