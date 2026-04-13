# Cursores compartidos en tiempo real

Este proyecto ha consistido en una aplicación donde los usuarios, cada vez que entran en la misma, pueden ver su cursor y el de otros usuarios en timepo real.

La aplicación utiliza:

- Node.js y Express para establecer un servidor y hacerlo funcionar constantemente.

- Socket.io para las comunicación de la información relacionada con la posición de los cursores hacia el servidor.

- Astro para establecer una interfaz frontend para que el usuario pueda ver los cursores.

URL del cliente: http://localhost:4321/ (hay que usar el comando "npm run dev" para activarlo).

URL del servidor: http://localhost:3000/ (hay que usar el comando "node server/server.js" para activarlo).

Problemas encontrados:

- Establecer los nombres de usuario.

- Lograr un color aleatorio por usuario.

- Establecer un contador de usuarios.

- Lograr que, al entrar en la aplicacion, se establezca un icono.

Soluciones aplicadas:

- Utilizando una función "prompt", el usuario escribe su nombre. Si no quiere, por defecto se llamará "Usuario". A continuación, se le establece el nombre en el socket.

- Gracias a la función "randomColor", se considera la paleta de colores disponible en el codigo HEX que se asigna a cada usuario.

- El contador se establece utilizando un "div" específico en el frontend y usando la función draw en el archivo "client.js", que permite actualizar y cambiar el texto del "div" dependiendo de cuantos usuarios hay en la aplicacion.

- Primero se establece un "canvas" y un "2d". A continuación, gracias a la función "draw" se consigue establecer siempre un icono cuadrado y un color aleatorio en el mismo.
