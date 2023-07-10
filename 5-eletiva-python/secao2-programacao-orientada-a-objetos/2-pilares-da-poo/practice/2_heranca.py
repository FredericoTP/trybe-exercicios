# Crie uma classe chamada Contact (contato), que deverá ter os atributos name e email.
# Crie uma classe chamada ContactList que deverá ter os atributos do tipo lista contacts e favorites. Esta classe deverá ter os métodos:
# add_contact: recebe um contato e o adiciona na lista
# remove_contact: recebe um nome e o remove da lista, retornando-o
# add_to_favorites: recebe um nome e o move da lista de contatos para a de favoritos
# remove_from_favorites: recebe um nome e o move da lista de favoritos para a de contatos
# Os três últimos métodos devem levantar um LookupError no caso do contato não ser encontrado.


class Contact:
    def __init__(self, name: str, email: str) -> None:
        self.name = name
        self.email = email


class ContactList:
    def __init__(self) -> None:
        self.contacts = []
        self.favorites = []

    def add_contact(self, contact: Contact) -> None:
        self.contacts.append(contact)

    def _find_contact(self, name: str, from_favorites=False) -> Contact:
        contact_list = self.favorites if from_favorites else self.contacts

        try:
            contact = [c for c in contact_list if c.name == name][0]
        except IndexError:
            raise LookupError(f"Contact named {name} not found")

        return contact

    def remove_contact(self, name: str) -> Contact:
        contact = self._find_contact(name)
        self.contacts.remove(contact)
        return contact

    def add_to_favorites(self, name: str) -> None:
        contact = self._find_contact(name)
        self.contacts.remove(contact)
        self.favorites.append(contact)

    def remove_from_favorites(self, name: str) -> None:
        contact = self._find_contact(name, from_favorites=True)
        self.favorites.remove(contact)
        self.contacts.append(contact)
