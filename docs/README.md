# Nemesis Ground Station
Welcome to the Nemesis Ground Station repository.
This repository contains the code for the frontend, the backend and the interfaces of the Nemesis Ground Station.

## Frontend
The frontend is built using:
- [Vuejs 3](https://vuejs.org/)
- [Nuxt](https://nuxtjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)

To start developping, you need to be in the `frontend` folder.
### Setup
Make sure first to install the dependencies:

```bash
# /frontend
yarn install
```

### Development 
Afterwards, you can start the development server:
```bash
# /frontend
yarn dev
```
And start coding!<br>
[Take a look at the frontend documentation before](frontend/README.md)

## Backend
The backend is built in Python with Django as a web framework running inside a Docker container.

### Development
You need to be in the root folder of the project.
<br>

Create a common network between drone and ground station :
```bash
docker network create ground_network
```

To start developing the backend, run the following command:
```bash
docker-compose up
```

For first time setup, you will need to migrate and populate the database :
In another shell :
```bash
docker-compose exec web python manage.py migrate
docker-compose exec web python populatedb.py
```

When you add a python dependency, you will need to rebuild the docker image:
```bash
docker-compose up --build
```
[Backend documentation](backend/README.md)