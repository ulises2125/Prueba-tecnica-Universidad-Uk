# CRUD de Productos con NestJS y MongoDB

Este proyecto es un CRUD (Crear, Leer, Actualizar, Eliminar) de productos implementado con el framework NestJS y la base de datos MongoDB.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- Node.js y npm
- MongoDB (asegúrate de que el servidor de MongoDB esté en ejecución)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias.

## Variables de entorno

Crear un archivo llamado .env al mismo nivel que la carpeta src que contendra lo siguiente:

```
MY_DATABASE = url de la base de datos
PORT = puerto de la apliación
```

## Ejecución

Una vez configurada la base de datos, puedes iniciar la aplicación mediante el siguiente comando:

```
npm run start
```

La aplicación estará disponible en `http://localhost:<PORT>`.

## Endpoints

La aplicación ofrece los siguientes endpoints:

- **CRUD de Productos**

  - `GET /products`: Obtener todos los productos.
  - `GET /product/:id`: Obtener un producto por ID.
  - `POST /product`: Crea un nuevo producto.
  - `PUT /product/:id`: Actualizar un producto por ID.
  - `DELETE /product/:id`: Elimina un producto por su ID.
