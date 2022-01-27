# Challenge-fpay
Prueba Técnica Stack MEAN para Fpay de Tomás Rubiño

La misma esta desarrollada utilizando un contenedor de Docker, con una imagen de Node basada en Alpine donde corre el servidor en Node.js con Express.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento y desplegarlo en tu máquina local._

### Pre-requisitos 📋

_Necesitas instalar la ultima version de los siguientes programas:_

```
Docker Desktop
Git
```

### Instalación 🔧

Hay 2 formas de realizar este paso. Pero antes que nada, revisa que no tienes el puerto
El primero seria descargando la imagen de dockerhub con el siguiente comando.


#### Método 1

```docker
docker run -p 3001:3001 reimot5/challenge-fpay:v1
```
Si luego de correr el comando, ves este resultado en tu consola, es porque todo fue un éxito!

![Sin título](https://user-images.githubusercontent.com/56139749/151352454-7d040495-afb6-4f02-aefc-9f72c95faa70.png)


#### Método 2

Primero que nada debes clonar el repositorio desde la consola de la siguiente forma.
```git
git clone https://github.com/Reimot5/challenge-fpay.git
```
Cuando lo tengas, debes ingresar el siguiente comando:
```bash
cd /challenge-fpay
```
Ahora debes crear un archivo llamado ".env" y colocar dentro las siguientes variables de entorno:

![image](https://user-images.githubusercontent.com/56139749/151357551-21f4a043-b85c-4395-9845-5d131992165e.png)

Luego, puedes ejecutar estos 2 comandos para correr el servidor de manera local, sino puedes utilizar docker e ir al siguiente paso.
```bash
npm i
```

```bash
npm start
```

Por ultimo, utiliza este comando:
```docker
docker build -t reimot5/challenge-fpay . && docker run -p 3001:3001 --name challenge-fpay reimot5/challenge-fpay
```
Cuando veas esto, es porque el contenedor y el servidor estan listos!

![image](https://user-images.githubusercontent.com/56139749/151355874-07fa314c-04c4-4f2f-b147-96af468dd077.png)


## Despliegue 📦

_Puedes probar la api utilizando Postman con [esta](https://github.com/Reimot5/challenge-fpay/blob/main/Collection%20for%20Reimot5-challenge-fpay.postman_collection.json) coleccion_

En esta coleccion encontraras todas las rutas de la api.

Igualmente te dejo aquí las rutas por si quieres usarlas.

* http://localhost:3001/ - Index.
* http://localhost:3001/health - Se puede utilizar para saber si la API funciona y desde hace cuanto tiempo que esta corriendo.
* http://localhost:3001/prime-numbers/:number - Podemos pasarle como parámetro un número entero, mayor a 2 y nos devuelve todos los numeros primos entre ese número y 2.

## Construido con 🛠️

* [Docker](https://www.docker.com/) - Docker es el motor sobre el cual se montan los contenedores
* [Node.js](https://nodejs.org/es/) - Node.js es el entorno en tiempo de ejecución para JavaScript usado
* [Express.js](https://expressjs.com/es/) - Framework de aplicaciones web para Node.js usado

## Contacto 📄

Ante cualquier duda te dejo mi correo:

* tomasrubino05@gmail.com
