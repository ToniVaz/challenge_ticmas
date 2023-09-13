# Desafío: Crear una API REST de Tareas

Desafío de programación para crear una API REST que permita realizar operaciones CRUD en el recurso "Tareas".

## Descripción del Desafío

El objetivo de este desafío es crear una API REST que permita realizar las siguientes operaciones en un recurso "Tareas":

1. Crear una nueva tarea.
2. Leer una lista de todas las tareas creadas.
3. Leer una tarea específica por su ID.
4. Actualizar una tarea existente por ID (cambio de estado, título o descripción).
5. Borrar una tarea por su ID.
6. Filtrar la lista de tareas según su status.
7. Verificar cuántos días transcurrieron desde la creación de la tarea hasta la fecha actual.

## Requisitos Técnicos

<li class="has-line-data" data-line-start="46" data-line-end="47"><a href="https://reactjs.org">React.js</a></li>

<li class="has-line-data" data-line-start="46" data-line-end="47"><a href="https://www.mongodb.com">MongoDB</a></li>

<li class="has-line-data" data-line-start="46" data-line-end="47"><a href="https://expressjs.com">Express.js</a></li>

<li class="has-line-data" data-line-start="46" data-line-end="47"><a href="https://nodejs.org">Node.js</a></li>

<li class="has-line-data" data-line-start="46" data-line-end="47"><a href="https://www.typescriptlang.org">TypeScript</a></li>

<li class="has-line-data" data-line-start="46" data-line-end="47"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>

   <p align="left">
   <img src="https://img.shields.io/badge/status-complete-blue">
   
   <img src="https://img.shields.io/badge/tests-passing-green">
   </p>
------------

## Instrucciones para Comenzar

1. Clona este repositorio a tu entorno de desarrollo.
2. Implementa la API REST de Tareas siguiendo los requisitos mencionados.

---

# Instalación

| Clonar Repositorio e Instalar dependencias                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <h6 style="font-family: 'Courier New', monospace;"><span style="color: red">1.</span> #clonar repositorio</h6>                                                                                            |
| <h6 style="font-family: 'Courier New', monospace;"><span style="color: red">2.</span> #git clone [https://github.com/ToniVaz/challenge_ticmas.git](https://github.com/ToniVaz/challenge_ticmas.git) </h6> |

| <h6 style="font-family: 'Courier New', monospace;"><span style="color: red">3.</span> <span style="color: blue">cd</span> challenge_ticmas</h6>
| <h6 style="font-family: 'Courier New', monospace;"><span style="color: red">4.</span> npm install</h6>

---

# Inicialización del Proyecto

Este repositorio contiene un proyecto que se puede iniciar utilizando varios comandos definidos en el archivo `package.json`. A continuación, se detallan los comandos disponibles:

## Comandos

- **Iniciar el Servidor**

  Para iniciar el servidor de la aplicación, ejecuta el siguiente comando:

<h4 style="font-family: 'Courier New', monospace;">1. npm run start</h4>

---

- **Iniciar el Servidor en modo desarrollo**

  Para iniciar el servidor de la aplicación en modo desarrollo, ejecuta el siguiente comando:

<h4 style="font-family: 'Courier New', monospace;">1. npm run dev</h4>

---

- **Iniciar el Servidor en modo Test End To End (e2e)**

Si deseas ejecutar pruebas end-to-end utilizando Jest con una configuración personalizada en jest-e2e.config.js, puedes utilizar el siguiente comando:

<h4 style="font-family: 'Courier New', monospace;">1. npm run test:e2e</h4>

---

# CURLS

### POST

```
curl --request POST \
  --url http://localhost:3000/task \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"title": "NEW TASK",
			"description": "TASK DESCRIPTION",
			"status": "COMPLETE",
			"user": "USER"
}
'
```

- Esta solicitud POST permite crear una nueva tarea.

---

### GET ALLS

```
curl --request GET \
  --url http://localhost:3000/task \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"title": "NEW TASK",
			"description": "TASK DESCRIPTION",
			"status": "COMPLETE",
			"user": "USER"
             }'
```

- Esta solicitud GET permite obtener la lista de todas las tareas.

---

### GET

```
curl --request GET \
  --url http://localhost:3000/task/65020220a1d6f142271ea3bd \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"title": "NEW TASK",
			"description": "TASK DESCRIPTION",
			"status": "COMPLETE",
			"user": "USER"
            }'
```

- Esta solicitud GET permite obtener una tarea específica por su ID.

---

### PUT

```
curl --request PUT \
  --url http://localhost:3000/task/64ffc5faa97cd9490b7e29d5 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"title": "NEW TASK UPDATE",
			"description": "TASK DESCRIPTION",
			"status": "COMPLETE",
			"user": "USER"
            }'
```

- Esta solicitud PUT permite actualizar los campos de una tarea específica por su ID.

---

### DELETE

```
curl --request DELETE \
  --url http://localhost:3000/task/64ffb5f785eebb07e7d2b3cd \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"title": "NEW TASK",
			"description": "TASK DESCRIPTION",
			"status": "COMPLETE",
			"user": "USER"
            }'
```

- Esta solicitud DELETE permite eliminar una tarea específica por su ID.

---

### GET BY STATUS

```
curl --request GET \
  --url http://localhost:3000/task/filter/COMPLETE \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"title": "NEW TASK",
			"description": "TASK DESCRIPTION",
			"status": "COMPLETE",
			"user": "USER"
            }'
```

- Esta solicitud GET permite obtener todas las tareas que coinsidan con un STATUS específico.

---

### GET DAYS PASSED

```
curl --request GET \
  --url http://localhost:3000/task/days_passed/650207e2a1d6f142271ea3cf \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{

			"title": "NEW TASK",
			"description": "TASK DESCRIPTION",
			"status": "COMPLETE",
			"user": "USER",
			"date": "2023-04-13T18:52:11.806Z"
            }'
```

- Esta solicitud GET permite obtener la cantidad de días transcurridos desde la creación de una tarea.

---
