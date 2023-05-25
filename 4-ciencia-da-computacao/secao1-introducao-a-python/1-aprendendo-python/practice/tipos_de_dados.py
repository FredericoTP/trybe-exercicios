# Lista para 1 e 2
trybe_course = ["Introdução", "Front-end", "Back-end"]

# 1- Adicione o elemento “Ciência da Computação” à lista.
 
trybe_course.append("Ciência da Computação")

# 2- Acesse e altere o primeiro elemento da lista para “Fundamentos”.

trybe_course[0] = "Fundamentos"

# 3- Um conjunto ou set pode ser inicializado utilizando-se também o método set(). Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos. Depois, imprima a variável e confira se o retorno é: {‘seu_nome’}.

var = set()
var.add("Fred")

print(var)

# Objeto para 4 e 5
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# 4- Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim”. Em seguida, imprima o objeto no console.

info["recorrente"] = "Sim"

# 5- Remova a propriedade cuja chave é “origem” e imprima o objeto no console.

del info["origem"]

#6- Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29. Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores?

# Tupla (tuple).

# 7- Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

# Dicionário (dict).