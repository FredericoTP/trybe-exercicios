# Com o Selenium, faça uma requisição para o endpoint https://quotes.toscrape.com/ e imprima a primeira citação que aparece na página.

from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()


def scrape(url):
    firefox.get(url)

    print(
        firefox.find_element(By.CLASS_NAME, "quote")
        .find_element(By.TAG_NAME, "span")
        .get_attribute("innerHTML")
    )


scrape("https://quotes.toscrape.com/")
