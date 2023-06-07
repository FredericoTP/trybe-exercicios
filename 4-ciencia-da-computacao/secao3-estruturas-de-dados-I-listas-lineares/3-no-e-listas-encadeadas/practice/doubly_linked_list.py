class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None

    def __str__(self):
        return f"""
        Node(value={self.value},
        next={self.next})
        """


class DoublyLinkedList:
    def __init__(self):
        self.head_value = None
        self.tail_value = None
        self.__length = 0

    def __str__(self):
        return f"""
        DoublyLinkedList(len={self.__length},
        next={self.head_value})
        """

    def __len__(self):
        return self.__length

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        first_value = Node(value)

        if not self.is_empty():
            self.head_value.previous = first_value
            first_value.next = self.head_value
            self.head_value.previous = first_value
            self.head_value = first_value
        else:
            self.head_value = first_value
            self.tail_value = first_value

        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.tail_value

        if self.is_empty():
            return self.insert_first(value)

        current_value.next = last_value
        last_value.previous = current_value
        self.tail_value = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)

        if position >= len(self):
            return self.insert_last(value)

        current_value = self.head_value

        while position > 1:
            current_value = current_value.next
            position -= 1

        next_value = Node(value)
        next_value.next = current_value.next
        next_value.previous = current_value
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value

        if value_to_be_removed.next:
            next_value = value_to_be_removed.next
            next_value.previous = None

        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1

        return value_to_be_removed

    def remove_last(self):
        value_to_be_removed = self.tail_value

        if value_to_be_removed.previous:
            previous_value = value_to_be_removed.previous
            previous_value.next = None

        if value_to_be_removed:
            self.tail_value = self.tail_value.previous
            value_to_be_removed.previous = None
            self.__length -= 1

        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()

        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.head_value

        while position > 1:
            previous_to_be_removed = previous_to_be_removed.next
            position -= 1

        value_to_be_removed = previous_to_be_removed.next
        next_to_value_to_be_removed = value_to_be_removed.next
        next_to_value_to_be_removed.previous = previous_to_be_removed
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed
        value_to_be_removed.next = None
        value_to_be_removed.previous = None

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.head_value

        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
            if value_to_be_returned:
                value_returned = Node(value_to_be_returned.value)

        return value_returned


linkedList = DoublyLinkedList()
print(linkedList.is_empty())

linkedList.insert_first(1)
print(linkedList)

linkedList.insert_first(2)
print(linkedList)

linkedList.insert_last(3)
print(linkedList)

linkedList.remove_last()
print(linkedList)

linkedList.remove_first()
print(linkedList)

linkedList.insert_at(5, 1)
print(linkedList)

linkedList.remove_at(0)
print(linkedList)

linkedList.insert_at(6, 1)
linkedList.insert_at(7, 2)
linkedList.insert_at(8, 3)
linkedList.insert_at(9, 4)

print(linkedList.get_element_at(4))
