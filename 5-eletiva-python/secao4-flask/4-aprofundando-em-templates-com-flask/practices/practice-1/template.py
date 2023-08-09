from jinja2 import Template


def read_names(names):
    template_string = "{% for name in names %}{{name}}\n{% endfor %}"
    template = Template(template_string)
    output = template.render(names=names)
    print(output)


names = ["Fred", "João", "Bruno"]

read_names(names)
