# Cobrando Skills Test
Desarrolle un projecto Fullstack para poder darle una interfaz grafica al manejo de la API.

### Pasos para ejecutar

#### SERVER
1. Asegurarse de haber creado una base de datos en Postgress.
2. Ubicado en la carpeta "Server", añadir un archivo .env con las siguientes variables de entorno:
```bash
DB_USER = [usuario]
DB_PASSWORD = [contrasena]
DB_NAME = [nombre base de datos]
MIKRO_ORM_ALLOW_GLOBAL_CONTEXT = true
```
3. Continuando en \Server, instalar dependencias:
```bash
npm install
```
4. Iniciar el servidor y base de datos con el siguiente comando:
```bash
npm run dev
```
Si desea, puede acceder al Playground de Graphql ingresando a la ruta "http://localhost:1234/graphql"

5. Realizar Seeds (En otra terminal) aquí, se inicializa entradas al campo "Departamentos" de la base de datos (realicé 3 entradas con los codigos 111,222,333, para poder empezar agregar Empleados con un formulario)
```bash
npm run seed
```

#### CLIENTE

Para ejecutar el servidor de React:

6. Ubicado dentro de la carpeta /Client, ejecute los comandos
```bash
npm install
npm start
```
7. El servidor iniciara en el puerto 3000, navegue a esa direccion en el browser
```bash
http://localhost:3000
```
#### CRUD Operations 

* Estando aqui puede empezar con añadir usuarios haciendo click en el enlace "Create Employee" y llenando el formulario
* El link "List of Employees" muestra el listado de empleados con sus respectivas entradas
* Tambien se agrega otro enlace para actualizar "Update" y un boton que elimina el usuario "Delete"

