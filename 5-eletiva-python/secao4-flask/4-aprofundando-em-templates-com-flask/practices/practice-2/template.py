from jinja2 import Template


def render_template(products):
    template_html = "template.html"

    with open(template_html) as file:
        template_file = file.read()

    template = Template(template_file)
    output = template.render(products=products)
    print(output)


products = [
    {"name": "Arroz", "price": 15.00, "inventory": 50},
    {"name": "Feijão", "price": 7.50, "inventory": 47},
    {"name": "Suco de uva", "price": 4.99, "inventory": 23},
]


render_template(products)
