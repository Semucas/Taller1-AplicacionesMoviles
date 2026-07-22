# Taller1-AplicacionesMoviles
Repo para el taller #1 del curso de Aplicaciones Móviles

## Retos JavaScript

En la rama `Reto` se agregaron cuatro ejercicios de HTML/CSS/JS, cada uno en su propia carpeta con un `index.html` autocontenido.

### `Clave/index.html` — Teclado virtual bancario
Simula un teclado numérico de banco donde los dígitos (0-9) se mezclan aleatoriamente cada vez que se pulsa una tecla, para dificultar que alguien memorice la posición de los números al observar el patrón de clics.

- PIN de ejemplo (hardcodeado para pruebas): **`1234`**
- El indicador visual (puntos) muestra un `*` por cada dígito ingresado.
- Las teclas numéricas se deshabilitan al completar los 4 dígitos; **hay que presionar `OK` para validar** la clave (no se valida automáticamente).
- Botón `⌫` para borrar el último dígito, ambos (`⌫` y `OK`) también cambian de posición junto con los números.

Para probarlo, abrir el archivo directamente en el navegador (doble clic o `file://`). Sin dependencias externas.

### `Menu/index.html` — Navbar fijo con scroll suave
Página de una sola vista con navbar fijo en la parte superior y 4 secciones (`Inicio`, `Servicios`, `Nosotros`, `Contacto`).

- Al hacer clic en un enlace del navbar, la página hace scroll suave (`scrollIntoView({ behavior: 'smooth' })`) hasta la sección correspondiente.
- El enlace de la sección visible se resalta automáticamente mientras se hace scroll manual.

Para probarlo, abrir el archivo directamente en el navegador. Sin dependencias externas.

### `Anim/index.html` — Escena animada con sonido
Escena con 4 figuras (círculo, cuadrado, triángulo, diamante) que flotan de forma continua y reaccionan a la interacción del usuario.

- **Animación**: [GreenSock (GSAP)](https://gsap.com/) vía CDN, para el flote continuo, el giro/salto al hacer clic en cada figura y la secuencia animada en cascada.
- **Sonido**: [Howler.js](https://howlerjs.com/) vía CDN, reproduciendo un tono distinto por figura (acorde ascendente Do-Mi-Sol-Si) y un sonido de éxito al completar la secuencia. Los sonidos son generados en formato WAV embebido (`data:audio/wav;base64,...`), por lo que no dependen de archivos de audio externos.
- Botones: `Reproducir secuencia` (anima las 4 figuras en cascada) y `Reiniciar escena`.

Requiere conexión a internet para cargar GSAP y Howler.js desde CDN. Abrir el archivo directamente en el navegador.

### `Texto/index.html` — Contador de caracteres en tiempo real
Campo de texto (`textarea`) que muestra en tiempo real la cantidad de caracteres y palabras ingresadas.

- Límite de **200 caracteres**, con barra de progreso que cambia de color (amarillo → naranja al 80% → rojo al llegar al límite).
- El conteo se actualiza en cada evento `input`, sin necesidad de botones adicionales.

Para probarlo, abrir el archivo directamente en el navegador. Sin dependencias externas.
