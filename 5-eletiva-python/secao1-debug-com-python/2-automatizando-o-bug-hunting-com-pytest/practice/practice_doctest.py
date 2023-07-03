# A função sum_two_numbers abaixo contém um bug.
# Crie um exemplo na docstring que pega esse bug ao rodar o módulo doctest e, em seguida, corrija-o.


def sum_two_numbers(a, b):
    """Retorna a soma de dois números recebidos por parâmetro.

    Exemplos
    --------
    >>> sum_two_numbers(0, 0)
    0
    >>> sum_two_numbers(1, 3)
    4
    >>> sum_two_numbers(-1, 3)
    2
    """
    return a + b
