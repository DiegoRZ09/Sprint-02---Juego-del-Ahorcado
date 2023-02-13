<h1 align="center"> Sprint 02 - Juego del Ahorcado</h1>

![Captura de pantalla 2022-12-09 173421](https://user-images.githubusercontent.com/112449858/218564197-6ed1f61b-0374-4e73-ae24-581037e79694.png)

En éste, el segundo reto del programa ORACLE NEXT EDUCATION, para reforzar los conocimientos adquiridos en cuando a fundamentos y lógica de programación, 
tuvimos que desarrollar el tradicional juego del ahorcado, el cual como característica especial, es que podemos agregar palabras nuevas a un "Array" interno de
palabras secretas para posteriormente poder jugar con ellas.


## :hammer:Funcionalidad del proyecto

- Iniciando la aplicación tenemos el menú principal, desde el cual podemos "Iniciar el Juego" o "Agregar una nueva palabra".

  ![menu](https://user-images.githubusercontent.com/112449858/218567843-9eb4c1cd-2bbe-4b02-88a7-81b362757d44.JPG)


- Este es el tablero del juego, lo interesante aquí es que hay un botón por cada letra del alfabeto. Al presionar la letra, si ella es parte de la palabra
  secreta, se va a mostrar en cada coincidencia que exista y el botón de la letra se deshabilitará para evitar que lo volvamos a presionar y 
  marcar un error innecesario en el juego.

  ![tablero](https://user-images.githubusercontent.com/112449858/218569405-a53d371c-eacd-4a09-9784-cf064895f076.JPG)


- Si llegamos a perder en el juego, nos mostrará la palabra que debíamos adivinar y a su vez nos mostrará el dibujo del ahorcado completo, el cual es trazado
  mediante los comandos de CANVAS. Durante todo el juego, así como una vez finalizado, ya sea por que ganamos o perdimos, tenemos dos botones, los cuales son:
    
    - Nuevo Juego: Nos da la posibilidad de olvidarnos del juego en curso e iniciar uno nuevo.
    - Salir: Nos regresa al menú principal.

  ![perdiste](https://user-images.githubusercontent.com/112449858/218575490-d8931fc6-e8d0-4c79-9cfd-fd92dc11f4c2.JPG)

- Una vez más en el menú principal, si seleccionamos la opción de "Agregar nueva palabra", nos va a mandar al siguiente apartado, dónde hay un cuadro
  de texto en el cual podemos ingresar una nueva palabra para que sea parte de la lista de palabras secretas para que podamos jugar con ella, pero para lograr
  éste cometido tenemos 3 botones debajo, los cuales tienen la siguiente función:
  
    - Guardar Palabra: Agrega a la lista la nueva palabra y nos deja en la misma pantalla para que podamos seguir agregando nuevas palabras.
    - Guardar y Comenzar: Agrega la palabra a la lista e inicia inmediatamente un nuevo juego.
    - Canccelar: Termina esa operación y nos devuelve al menú principal.
  
  ![agregar](https://user-images.githubusercontent.com/112449858/218578338-4f9c9756-462a-478d-a733-685bab8f4e77.JPG)

- Es importante mencionar que la aplicación es responsiva, es decir, puede ajustarse al tamaño de pantalla de diversos dispositivos.
  
  <br>
  
## :open_file_folder: :rocket: Abre y ejecuta el proyecto
  
  La diversión de este proyecto es facilmente alcanzable, solo ingresa al siguiente enlace:
    
  https://diegorz09.github.io/Sprint-02---Juego-del-Ahorcado/
    
  <br>    
      
## :heavy_check_mark: Tecnologías aplicadas
    
    - HTML5
    - CSS3
    - JavaScript
    
    
## Autores

  | [<img src="https://avatars.githubusercontent.com/u/112449858?s=400&u=6df892a92a87cc656d44f9ecdb9333dc404d5c6e&v=4" width=115><br><sub>Diego Reyes</sub>](https://github.com/DiegoRZ09) |
  | :---: |

