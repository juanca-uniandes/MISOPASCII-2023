# MISOPASCII-2023
## Generalidades 
1. Las funcionalidades y escenarios de prueba fueron realizados en ```MACOS Sonoma 14.0```
2. Tanto para GHOST, KRAKEN y CYPRESS se ha usado la version de ```NodeJS 18```
3. Este trabajo es presentado de manera individual por mi persona Juan Camilo Vallejos, por ende, he escogido 5 funcionalidades y por cada funcionalidad 1 escenario de prueba para realizarlo tanto con KRAKEN como con CYPRESS y así de esta manera presentar 10 escenarios de pruebas E2E.  

## Despliegue de ghost
1. Clonar repositorio ```git clone https://github.com/juanca-uniandes/MISOPASCII-2023.git```
2. Crear en la raiz una carpeta de llamada ghost ```mkdir ghost```
3. ```cd ghost```
4. ```npm install ghost-cli –g```
5. ```ghost install local```
6. Automáticamente, se instalará ghost y al finalizar la instalación mostrará por consola la URL en la cual está desplegado. ```http://localhost:YOUR_PORT```
7. Ten presente esta URL porque la vamos a usar en pasos siguientes.

## Despliegue de Kraken
1. Instalar Android Studio Giraffe https://developer.android.com/studio
2. Puedes verificar si las variables de entorno ADB han sido añadidas, de los contrarios deberás adicionarlas al .zshrc con los siguientes pasos: ```nano ~/.zshrc``` y adicionar ```export PATH=$PATH:/Users/YOUR_USER_NAME/Library/Android/sdk/platform-tools```. Una vez adicionado este path deberias ser capaz de ejecutar ```adb --versio```. El resultado en mi caso es el siguiente: ```Version 34.0.5-10900879
Installed as /Users/juan/Library/Android/sdk/platform-tools/adb
Running on Darwin 23.0.0 (arm64)```
3. estando en la raiz del proyecto vamos a la siguiente carpeta ```e2e/kraken```
4. ```npm install```
5. 
