# MISOPASCII-2023
## Generalidades 
1. Las funcionalidades y escenarios de prueba fueron realizados en ```MACOS Sonoma 14.0```
3. Este trabajo es presentado de manera individual por mi persona Juan Camilo Vallejos [j.vallejosg@uniandes.edu.co], por ende, he escogido 5 funcionalidades y por cada funcionalidad 1 escenario de prueba para realizarlo tanto con KRAKEN como con CYPRESS y así de esta manera presentar 10 escenarios de pruebas E2E.
4. Los test realizados con KRAKEN se encuentran en ```e2e/kraken/features``` 

## Instalacion de nvm para trajar con diferentes versiones de node
1. ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash```
2. Este comando te clonara la última versión estable de NVM en tu directorio ```~/.nvm```, luego intentara escribir en tu archivo ```~/.zshrc``` o ```~/.bashrc``` el código de abajo. Esto para que NVM se cargue y funcione correctamente al iniciar sesión en tu computadora.
3. ```[export NVM_DIR="$HOME/.nvm" <br> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm <br> [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion]``` 

## Despliegue de Ghost
1. Clonar repositorio ```git clone https://github.com/juanca-uniandes/MISOPASCII-2023.git```
2. Crear en la raiz una carpeta de llamada ghost ```mkdir ghost```
3. ```cd ghost```
4. ```npm install ghost-cli –g```
5. ```ghost install local```
6. Automáticamente, se instalará ghost y al finalizar la instalación mostrará por consola la URL en la cual está desplegado. ```http://localhost:YOUR_PORT```
7. Ingresa en la URL y deberias ver un formulario para nombrar a tu proyecto local de ghost, y crear un usuario con correo y contraseña para poder acceder al dashboard. Ten presente este usuario y contraseña porque lo usuremos en pasos posteriores. ```[YOUR_EMAIL, YOUR_PASSWORD]```
8. Ten presente la URL generada en el paso 6 porque la vamos a usar en pasos posteriores.

## Despliegue de Kraken
1. Instalar Android Studio Giraffe https://developer.android.com/studio
2. Puedes verificar si las variables de entorno ADB han sido añadidas, de los contrarios deberás adicionarlas al .zshrc con los siguientes pasos: ```nano ~/.zshrc``` y adicionar ```export PATH=$PATH:/Users/YOUR_USER_NAME/Library/Android/sdk/platform-tools```. Una vez adicionado este path deberias ser capaz de ejecutar ```adb --versio```. El resultado en mi caso es el siguiente: ```Version 34.0.5-10900879
Installed as /Users/juan/Library/Android/sdk/platform-tools/adb
Running on Darwin 23.0.0 (arm64)```
3. Estando en la raiz del proyecto vamos a la siguiente carpeta ```cd e2e/kraken```
4. Ejecutamos ```npm install``` esto deberia instalar las dependencias necesarias para ejecutar los test
5. Ahora si modificamos el ```properties.json``` y en la variables ```MAIN_URL, LOGIN_URL, EMAIL, PASSWORD``` remplazalas por la URL que se genero en el paso 6 del despliegue de Ghost y el email y password seran los que creaste en el paso 7 del depliegue de Ghost
6. Finalmente ejecutamos el comando ```./node_modules/kraken-node/bin/kraken-node run``` y los test empezaran a ejecutarse.
