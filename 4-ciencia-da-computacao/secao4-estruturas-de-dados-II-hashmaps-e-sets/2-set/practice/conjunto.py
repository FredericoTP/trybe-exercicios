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

    def add(self, value):
        if not self.data[value]:
            self.data[value] = True

        if value > self.last_element:
            self.last_element = value


A = Conjunto(1000)
A.add(0)
A.add(10)
A.add(100)
A.add(1000)

print(A)
