from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# Extrai todos os preços da primeira página
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)

response_desc = requests.get(
    "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
)
selector_desc = Selector(text=response_desc.text)

# Extrai a descrição
description = selector_desc.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
print(description)
