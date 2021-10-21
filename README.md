# README #

Esta api de validación de placa permitirá indicar si un vehículo con una placa determinada puede circular o no en el día y
hora indicada

##Requisitos
1. Node.js 10.14
2. Typescript 3.4.4

## Cómo uitilizar este repositorio ##
Clonar el repositorio y configurar el archivo .env según las necesidades el caso.

Ejecutar los comandos: 

Para instalar las dependencias externas:
```
npm install
```
Para correr localmente:
```
npm run dev
```

Crear el archivo .env de las variables de entorno del proyecto.

```
cp .env.(ambiente) .env
```

## Deployment

Para que el webser en NodeJS se mantenga activo, es necesario configurarlo como proceso demonio en nuestro servidor, para lo cual se puede utilizar el manejador de procesos PM2.

```
sudo npm install -g pm2
```

Después solo se debe correr el siguiente comando que compila el typescript y ejecuta el PM2
```
sudo npm start
```

## Documentación

Acceder a la ruta:
```
http://localhost:3001/api-docs
```

## Ejemplo de petición

POST 

```
http://localhost:3001/api/v1/validate/licensePlate
```

Request Body

```
{
    "date": "2019-11-14",
    "time": "08:00",
    "licensePlate": "XXX-1234"
}
```
