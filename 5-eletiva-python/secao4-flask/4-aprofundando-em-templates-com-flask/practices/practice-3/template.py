from jinja2 import Template


def render_contract(name, email, message):
    with open("template.html") as file:
        template_file = file.read()

    template = Template(template_file)
    output = template.render(name=name, email=email, message=message)

    print(output)


name = input("Digite seu nome: ")
email = input("Digite seu e-mail: ")
message = input("Digite sua mensagem: ")

render_contract(name, email, message)
