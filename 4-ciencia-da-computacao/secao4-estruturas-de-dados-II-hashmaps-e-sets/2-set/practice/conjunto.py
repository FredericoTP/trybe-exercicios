class Conjunto:
    def __init__(self, size):
        self.data = [False for i in range(size + 1)]
        self.last_element = 0

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
