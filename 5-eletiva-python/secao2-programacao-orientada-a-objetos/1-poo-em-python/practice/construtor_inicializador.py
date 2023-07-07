# 7- Crie um método construtor para a classe Database criada no exercício 3. O método deve receber os seguintes parâmetros:
# dialect
# user
# host
# password
# database
# port (opcional)
# O parâmetro port pode ser do tipo str ou int, devendo ser um valor numérico, levantando ValueError caso contrário. Os demais parâmetros devem ser do tipo str.

# 8- O método construtor de Database deve criar um atributo chamado connection_url, no formato dialect://username:password@host:port/database.
# Adote as portas padrão dos serviços do MySQL e PostgreSQL. Se o dialeto não for nenhum desses dois e a porta não for especificada, levante um ValueError.


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
        if not port:
            if dialect == "mysql":
                port = 3306
            elif dialect == "postgres":
                port = 5432
            else:
                raise ValueError(
                    "invalid default `port` for unrecognized `dialect`"
                )

        if type(port) == str and not port.isnumeric():
            raise ValueError("`port` must have a numeric value")

        self.connection_url = (
            f"{dialect}://{user}:{password}@{host}:{port}/{database}"
        )
