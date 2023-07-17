# Baseando-se em uma página contendo detalhes sobre um livro (http://books.toscrape.com/catalogue/the-grand-design_405/index.html),
# faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.
# ⚠️ O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76.
# ⚠️ A descrição de ter o sufixo “more…” removido quando existir.
# ⚠️ Os campos extraídos devem ser apresentados separados por vírgula. Ex: título,preço,descrição,capa.

# Modifique o exercício anterior para retornar também quantos livros estão disponíveis, apresentando como último campo no retorno.

import requests
from parsel import Selector

response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()

price = selector.css(".product_main .price_color::text").re_first(
    r"\d+\.\d{2}"
)

description = selector.css("#product_description ~ p::text").get()
if description.endswith("...more"):
    description = description[: -len("...more")]

image_url = selector.css("#product_gallery img::attr(src)").get()
url = "http://books.toscrape.com/catalogue/" + image_url

stock = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, description, url, stock, sep=",")
