## Generalidades 
1. Las funcionalidades y escenarios de prueba fueron realizados en `macOS Sonoma 14.0`.
3. Este trabajo es presentado de manera individual por mi persona Juan Camilo Vallejos [j.vallejosg@uniandes.edu.co], por ende, he escogido 5 funcionalidades y por cada funcionalidad 1 escenario de prueba para realizarlo tanto con KRAKEN como con CYPRESS y así de esta manera presentar 10 escenarios de pruebas E2E.
4. Los test realizados con KRAKEN se encuentran en ```e2e/kraken/features```.
5. Los test realizados con CYPRESS se encuentran en ```e2e/cypress/e2e```
6. ATENCION ⚠️⚠️⚠️: Ghost tiene un limites de peticiones que se le pueden realizar al login, si se supera dicho limite te bloqueara por una hora. Para evadir este bloqueo podemos cargar la base de datos ```ghost/content/data/ghost-local.db``` y eliminar todos los registros de la tabla ```brute```

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
6. `ghost install local`
7. Automáticamente, se instalará Ghost y al finalizar la instalación mostrará por consola la URL en la cual está desplegado. `http://localhost:YOUR_PORT`
8. Ingresa en la URL y deberías ver un formulario para nombrar a tu proyecto local de Ghost, y crear un usuario con correo y contraseña para poder acceder al dashboard. Ten presente este usuario y contraseña porque lo usaremos en pasos posteriores. `[YOUR_EMAIL, YOUR_PASSWORD]`
9. Ten presente la URL generada en el paso 6 porque la vamos a usar en pasos posteriores.

## Despliegue y ejecución de pruebas con Kraken
1. Usando `nvm` vamos a instalar la versión de `node 20` por lo tanto debemos hacer `nvm install 20` y ` nvm use 20` esto instalará y usará la versión 20 de node en nuestro sistema y adicionará el path automáticamente a las variables de entorno. Si haces `node --version` verás la versión 20.x que se ha instalado. 
2. Instalar Android Studio Giraffe [https://developer.android.com/studio](https://developer.android.com/studio)
3. Puedes verificar si las variables de entorno ADB han sido añadidas, de lo contrario deberás adicionarlas al .zshrc con los siguientes pasos: `nano ~/.zshrc` y adicionar `export PATH=$PATH:/Users/YOUR_USER_NAME/Library/Android/sdk/platform-tools`. Una vez adicionado este path deberías ser capaz de ejecutar `adb --versio`. El resultado en mi caso es el siguiente: `Version 34.0.5-10900879
Installed as /Users/juan/Library/Android/sdk/platform-tools/adb
Running on Darwin 23.0.0 (arm64)`
4. Estando en la raíz del proyecto vamos a la siguiente carpeta `cd e2e/kraken`
5. Ejecutamos `npm install` esto debería instalar las dependencias necesarias para ejecutar los test
6. Ahora sí modificamos el `properties.json` y en las variables `MAIN_URL, LOGIN_URL, EMAIL, PASSWORD` reemplázalas por la URL que se generó en el paso 6 del despliegue de Ghost y el email y password serán los que creaste en el paso 7 del despliegue de Ghost
7. Finalmente ejecutamos el comando `./node_modules/kraken-node/bin/kraken-node run` y los test empezarán a ejecutarse.
8. ![image](https://github.com/juanca-uniandes/MISOPASCII-2023/assets/142238841/9c146531-5635-4656-9b17-0fad3a96ed76)


## Despliegue y ejecución de pruebas con Cypress
1. Usando `nvm` vamos a instalar la versión de `node 20` por lo tanto debemos hacer `nvm install 20` y ` nvm use 20` esto instalará y usará la versión 20 de node en nuestro sistema y adicionará el path automáticamente a las variables de entorno. Si haces `node --version` verás la versión 20.x que se ha instalado.
2. Desde la raíz del proyecto realizamos `cd e2e/cypress`
3. Ejecutamos `npm install`
4. Modificamos el siguiente archivo `nano e2e/cypress/params.js` y en las variables `MAIN_URL, LOGIN_URL, EMAIL, PASSWORD` reemplázalas por la URL que se generó en el paso 6 del despliegue de Ghost y el email y password serán los que creaste en el paso 7 del despliegue de Ghost
5. Y finalmente ejecutamos los test con `npm run cypress:run`
6. ![image](https://github.com/juanca-uniandes/MISOPASCII-2023/assets/142238841/1df9f142-1aed-4408-a6fa-2750ecb0bcb3)

