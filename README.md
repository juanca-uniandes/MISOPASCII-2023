## Generalidades 
1. Las funcionalidades y escenarios de prueba fueron realizados en `macOS Sonoma 14.0`.
2. Este trabajo es presentado de manera individual por mi persona Juan Camilo Vallejos [j.vallejosg@uniandes.edu.co], por ende, he escogido 30 pruebas.
3. Solo se uso CYPRESS y los test se encuentran en ```e2e/cypress/e2e```.
4. Los test de estrategia aleatoria están ```e2e/cypress/e2e/01-estrategia-escenario-aleatorio```
5. Los test de estrategia estrategia pool de datos a priori estan ```e2e/cypress/e2e/02-estrategia-pool-de-datos-a-priori```
6. Los test de estrategia de pool de datos pseudo aleatorio estan ```e2e/cypress/e2e/03-estrategia-pool-de-datos-pseudo-aleatorio```
7. ATENCION ⚠️⚠️⚠️: Ghost tiene un limites de peticiones que se le pueden realizar al login, si se supera dicho limite te bloqueara por una hora. Para evadir este bloqueo podemos cargar la base de datos ```ghost/content/data/ghost-local.db``` y eliminar todos los registros de la tabla ```brute```.
8. Para el registro de incidencias revisar los issues que inician con SEMANA VI - Solo pude localizar 7 incidencias. debido a que trabaje solo con 30 pruebas.

## Instalación de nvm para trabajar con diferentes versiones de node
1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
2. Este comando te clonará la última versión estable de NVM en tu directorio `~/.nvm`, luego intentará escribir en tu archivo `~/.zshrc` o `~/.bashrc` el código de abajo. Esto para que NVM se cargue y funcione correctamente al iniciar sesión en tu computadora.
3. ![image](https://github.com/juanca-uniandes/MISOPASCII-2023/assets/142238841/df39c553-55e5-4db6-b691-7d2df5a9d769)
4. Realizamos un source `source ~/.zshrc` o `source ~/.bashrc`
5. Y si ejecutamos `nvm --version` deberíamos recibir una respuesta como esta
![image](https://github.com/juanca-uniandes/MISOPASCII-2023/assets/142238841/72b8d885-19ab-48dc-9ddc-b5ac1e8be9ea)

## Despliegue de Ghost
1. Usando `nvm` vamos a instalar la versión de `node 18` por lo tanto debemos hacer `nvm install 18` y `nvm use 18` esto instalará y usará la versión 18 de node en nuestro sistema y adicionará el path automáticamente a las variables de entorno. Si haces `node --version` verás la versión 18.x que se ha instalado. 
2. Clonar repositorio `git clone https://github.com/juanca-uniandes/MISOPASCII-2023.git`
3. Crear en la raíz una carpeta llamada ghost `mkdir ghost`
4. `cd ghost`
5. `npm install ghost-cli –g`
6. `ghost install 5.72.2 --local`
7. Automáticamente, se instalará Ghost y al finalizar la instalación mostrará por consola la URL en la cual está desplegado. `http://localhost:YOUR_PORT`
8. Ingresa en la URL y deberías ver un formulario para nombrar a tu proyecto local de Ghost, y crear un usuario con correo y contraseña para poder acceder al dashboard. Ten presente este usuario y contraseña porque lo usaremos en pasos posteriores. `[YOUR_EMAIL, YOUR_PASSWORD]`
9. Ten presente la URL generada en el paso 6 porque la vamos a usar en pasos posteriores.


## Despliegue y ejecución de pruebas con Cypress
1. Usando `nvm` vamos a instalar la versión de `node 20` por lo tanto debemos hacer `nvm install 20` y ` nvm use 20` esto instalará y usará la versión 20 de node en nuestro sistema y adicionará el path automáticamente a las variables de entorno. Si haces `node --version` verás la versión 20.x que se ha instalado.
2. Desde la raíz del proyecto realizamos `cd e2e/cypress`
3. Ejecutamos `npm install`
4. Modificamos el siguiente archivo `nano e2e/cypress/params.js` y en las variables `MAIN_URL, LOGIN_URL, EMAIL, PASSWORD` reemplázalas por la URL que se generó en el paso 6 del despliegue de Ghost y el email y password serán los que creaste en el paso 7 del despliegue de Ghost
5. Y finalmente ejecutamos los test con `npm run cypress:run`
6. ![image](https://github.com/juanca-uniandes/MISOPASCII-2023/assets/142238841/1df9f142-1aed-4408-a6fa-2750ecb0bcb3)

## Estrategias de pruebas
### Estrategia escenario aleatorio.
Para la generación aleatoria de datos, se utilizó la herramienta Faker, importando la biblioteca en cada uno de los archivos que implementan los 15 casos de prueba mencionados. Según las entradas del escenario de prueba a validar, se emplearon los métodos proporcionados por la biblioteca Faker, tales como word, words, lorem, internet, etc.

### Estrategia pool de datos a-priori
Para la generación previa de datos, se utilizó la herramienta Mockaroo estableciendo un template de data general llamado MOCK_DATA.json con 1000 registros y este fue ubicado dentro del proyecto cypress. En cada caso de pruebas implementado, se importó el mencionado archivo haciedo uso aletario de los registros allí encontrados.

### Estrategia pool de datos (pseudo) aleatorio dinámico
Para la generación pseudoaleatoria de datos, se empleó el generador de datos Mockaroo a través de una interfaz tipo API. En este proceso, se creó una cuenta en Mockaroo y se diseñó un esquema denominado 'Data'. Este esquema está definido por un objeto que incluye las propiedades 'first_name', 'second_name', 'short_text', 'long_text', y sus valores son generados de forma automática.

Esta URL se utiliza en cada caso de prueba cypres, al obtener el response del api su body lo guardo en un objeto y luego lo uso para llenar los campos de la interfaz.



