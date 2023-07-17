# Imprima todos os parágrafos da página:
# https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/.

from selenium import webdriver
from selenium.webdriver.common.by import By


firefox = webdriver.Firefox()


def paragraphs(url):
    firefox.get(url)

    all_paragraphs = firefox.find_elements(By.TAG_NAME, "p")

    for paragraph in all_paragraphs:
        print(paragraph.text)


paragraphs(
    "https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"
)
