class Conjunto:
    def __init__(self, size):
        self.data = [False for i in range(size + 1)]
        self.last_element = 0

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.data):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, value):
        return self.data[value]

    def add(self, value):
        if not self.data[value]:
            self.data[value] = True

        if value > self.last_element:
            self.last_element = value

    def union(self, conjunto_b):
        size = self.last_element

        if conjunto_b.last_element > size:
            size = conjunto_b.last_element

        new_conjunto = Conjunto(size)

        for index in range(size + 1):
            if self.data[index] or conjunto_b.data[index]:
                new_conjunto.add(index)

        return new_conjunto


A = Conjunto(1000)
B = Conjunto(10)
A.add(0)
A.add(1)
A.add(2)
A.add(3)
B.add(3)
B.add(4)
B.add(5)


print(A.union(B))
