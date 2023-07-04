#  Utilize a biblioteca Faker para criar os seguintes dados falsos no locale espanhol da Argentina, e exibi-los na tela:
# Sobrenome.
# E-mail.
# Senha.
# URL.
# Placa de carro.

from faker import Faker


faker = Faker(locale="es_AR")

print(faker.last_name())
print(faker.email())
print(faker.password())
print(faker.url())
print(faker.license_plate())
