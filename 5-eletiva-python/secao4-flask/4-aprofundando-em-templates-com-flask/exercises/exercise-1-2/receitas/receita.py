from jinja2 import FileSystemLoader, Environment
from filters.custom_filter import split_phrase

loader = FileSystemLoader("receitas/templates")

environment = Environment(loader=loader)
environment.filters["split_phrase"] = split_phrase

template = environment.get_template("receita.html")

data = {
    "nome": "Pudim de leite condensado",
    "ingredientes": ["leite condensado", "creme de leite", "ovos", "açúcar"],
    "preparo": "bata o leite condensado junto com o creme de leite e os ovos no liquidificador por 5 minutos, enquanto isso, coloque o açúcar na frigideira até virar caramelo, ponha o caramelo em uma forma e despeje a misturam em cima, coloque para gelar",
}

output = template.render(receita=data)

print(output)
