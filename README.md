# Taller1-AplicacionesMoviles
Repo para el taller #1 del curso de Aplicaciones Móviles

## Reto JavaScript

En la rama `Reto` se agregaron dos ejercicios de HTML/CSS/JS puro (sin dependencias externas):

### `Clave/index.html` — Teclado virtual bancario
Simula un teclado numérico de banco donde los dígitos (0-9) se mezclan aleatoriamente cada vez que se pulsa una tecla, para dificultar que alguien memorice la posición de los números al observar el patrón de clics.

- PIN de ejemplo (hardcodeado para pruebas): **`1234`**
- El indicador visual (puntos) muestra cuántos dígitos se han ingresado.
- Al completar los 4 dígitos, se valida automáticamente contra el PIN de ejemplo y muestra si es correcto o incorrecto.
- Botones `⌫` (borrar) y `OK` también cambian de posición junto con los números.

Para probarlo, abrir el archivo directamente en el navegador (doble clic o `file://`).

### `Menu/index.html` — Navbar fijo con scroll suave
Página de una sola vista con navbar fijo en la parte superior y 4 secciones (`Inicio`, `Servicios`, `Nosotros`, `Contacto`).

- Al hacer clic en un enlace del navbar, la página hace scroll suave (`scrollIntoView({ behavior: 'smooth' })`) hasta la sección correspondiente.
- El enlace de la sección visible se resalta automáticamente mientras se hace scroll manual.

Para probarlo, abrir el archivo directamente en el navegador.
