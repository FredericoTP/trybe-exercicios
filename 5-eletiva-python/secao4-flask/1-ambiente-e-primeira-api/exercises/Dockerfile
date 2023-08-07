FROM python:3-alpine3.17

WORKDIR /src

COPY src/*requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

ARG FLASK_ENV
RUN if [ "$FLASK_ENV" = "dev" ] ; then pip install --no-cache-dir -r dev-requirements.txt  ; fi

COPY ./src .

CMD ["python3", "app.py"]