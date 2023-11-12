# MISOPASCII-2023
## Generalidades 
1. Las funcionalidades y escenarios de prueba fueron realizados en MACOS Sonoma 14.0.
2. Versión de NodeJS  usada para GHOST, KRAKEN y CYPRESS fue la versión 18.
3. Este trabajo es presentado de manera individual por mi persona Juan Camilo Vallejos, por ende, he escogido 5 funcionalidades y por cada funcionalidad 1 escenario de prueba para realizarlo tanto con KRAKEN como con CYPRESS y así de esta manera presentar 10 escenarios de pruebas E2E.  

## Despliegue de ghost
1. Clonar repositorio ```git clone https://github.com/juanca-uniandes/MISOPASCII-2023.git```
2. Crear en la raiz una carpeta de llamada ghost ```mkdir ghost```
3. ```cd ghost```
4. ```npm install ghost-cli –g```
5. ```ghost install local```
6. Automáticamente, se instalará ghost y al finalizar la instalación mostrará por consola la URL en la cual está desplegado. [http://localhost:YOUR_PORT]
7. Ten presente esta URL porque la vamos a usar en pasos siguientes. 
