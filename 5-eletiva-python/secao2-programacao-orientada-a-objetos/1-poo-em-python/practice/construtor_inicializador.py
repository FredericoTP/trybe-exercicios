# 7- Crie um método construtor para a classe Database criada no exercício 3. O método deve receber os seguintes parâmetros:
# dialect
# user
# host
# password
# database
# port (opcional)
# O parâmetro port pode ser do tipo str ou int, devendo ser um valor numérico, levantando ValueError caso contrário. Os demais parâmetros devem ser do tipo str.


class Database:
    def __init__(
        self,
        dialect: str,
        user: str,
        host: str,
        password: str,
        database: str,
        port: str | int = "",
    ) -> None:
        if type(port) == str and not port.isnumeric():
            raise ValueError("`port` must have a numeric value")

        self.dialect = dialect
        self.user = user
        self.host = host
        self.password = password
        self.database = database
        self.port = port
