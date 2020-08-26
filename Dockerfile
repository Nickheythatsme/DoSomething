FROM python:3.8-alpine
WORKDIR /srv
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 8000

COPY . .

RUN python /srv/DoSomething/manage.py migrate
CMD ["python3", "/srv/DoSomething/manage.py", "runserver", "0.0.0.0:8000"]
