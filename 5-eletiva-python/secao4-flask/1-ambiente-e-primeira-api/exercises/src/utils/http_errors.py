from enum import Enum


class HttpError(Enum):
    OK: 200
    CREATED: 201
    NO_CONTENT: 204
    NOT_FOUND: 404
