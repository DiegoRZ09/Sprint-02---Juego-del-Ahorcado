let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let coleccion = ["COMIDA", "MATAMOSCAS", "FOTO", "JUGUETE", "TELEVISION", "MESA", "ESCOBA", "CUCARACHA", "BOTELLA", "SONIDO"];
let palabraSecreta = "";
let tablero = document.getElementById("horca").getContext("2d");
let input = document.querySelector(".ingresarTexto");
let btnLetra = "";
let numAciertos = 0;
let numErrores = 0;

mostrarMenuPrincipal();

function mostrarMenuPrincipal(){

    document.getElementById("botonesInicio").style.display = "block";
    document.getElementById("areaJuego").style.display = "none";
    document.getElementById("ingresarPalabra").style.display = "none";

}

function iniciarJuego(){

    document.getElementById("botonesInicio").style.display = "none";
    document.getElementById("ingresarPalabra").style.display = "none";
    document.getElementById("areaJuego").style.display = "block";
    document.getElementById("botonesLetras").style.display = "block";
    document.getElementById("msjFinal").innerHTML = "";
    document.getElementById("letrasIncorrectas").innerHTML = "";
    document.querySelectorAll("#botonesLetras button");
    
    
    numAciertos = 0;
    numErrores = 0;
    crearBotones();
    botonesLetras();
    escogerPalabra();
    dibujarTablero();
    dibujarLineas();
    
}

function mostrarPantallaNuevaPalabra(){

    document.getElementById("botonesInicio").style.display = "none";
    document.getElementById("ingresarPalabra").style.display = "block";

}

/*Esta funcion activa los botones al iniciar un nuevo juego*/
function botonesLetras(){

    let botones = document.querySelectorAll("#botonesLetras button");

    for(let i=0; i < botones.length; i++){
        
        botones[i].disabled = false;
        
    }   
}

/*Funcion que crea botones de letras*/
function crearBotones(){

    for ( var i=0; i < letras.length; i++){
        
        btnLetra = letras[i];
        document.getElementById("botonesLetras").innerHTML += "<button value="+ btnLetra + " onclick= mostrarLetras('" + btnLetra + "',this)>" + btnLetra + "</button>";
        
        
    }

    letras= "";

}



/*Funcion que escoge aleatoriamente la palabra*/
function escogerPalabra(){

    let palabra = coleccion[Math.floor(Math.random()*coleccion.length)];
    //Estas lineas de codigo permiten en consola ver el arreglo y la palabra aleatoria
    console.log("El arreglo es: ");
    console.log(coleccion);
    console.log("Y un aleatorio es: ");
    console.log(palabra);
    palabraSecreta = palabra;
}

/*Agrega palabras nuevas al arreglo de palabras secretas*/
function agregarPalabra(){
    
    var nuevaPalabra = input.value;
    nuevaPalabra = nuevaPalabra.toUpperCase(); 
    coleccion.push(nuevaPalabra);
    input.value="";
    return coleccion;
}

/*Presenta el tablero de canvas*/
function dibujarTablero() {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle=""
    tablero.fillStyle= "#eeefe3";
    tablero.strokeStyle = "#97711b";
    tablero.fillRect(0,0,400,400);
    tablero.beginPath();
    tablero.moveTo(50,350);
    tablero.lineTo(350,350);
    tablero.stroke();
    tablero.closePath();
  }

/*Aplica la logica para dibujar en canvas el ahorcado*/
function dibujarAhorcado(){

    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#eeefe3";
    tablero.strokeStyle = "#97711b";

    if(numErrores == 1){
        tablero.moveTo(150,350); //1
        tablero.lineTo(150,50); //1   
    } 

    if(numErrores == 2){
        tablero.moveTo(150,50);
        tablero.lineTo(275,50);//2
    }
    
    if(numErrores == 3){
        tablero.moveTo(275,50);
        tablero.lineTo(275,75);//3
    }
    
    if(numErrores == 4){
        tablero.moveTo(315,115);
        tablero.arc(275,115,40,0,2*Math.PI);//4
    }
    
    if(numErrores == 5){
        tablero.moveTo(275,155);//5
        tablero.lineTo(275,250);//5
    }

    if(numErrores == 6){
        tablero.moveTo(275,175);//6
        tablero.lineTo(235,215);//6
    }

    if(numErrores == 7){
        tablero.moveTo(275,175);//7
        tablero.lineTo(315,215);//7
    }
    
    if(numErrores == 8){
        tablero.moveTo(275,250);//8
        tablero.lineTo(235,290);//8
    }

    if(numErrores == 9){
        tablero.moveTo(275,250);//9
        tablero.lineTo(315,290);//9
    }

    tablero.stroke();
    tablero.closePath();

}

/*Crea un guion por cada letra*/
function dibujarLineas(){

    var guiones = document.getElementById("palabraAdivinar");
    guiones.innerHTML="";

    for(let i = 0; i < palabraSecreta.length;i++){
            var guion = document.createElement("span");
            guiones.appendChild(guion);
    }

}

/*Muestra letras correctas e incorrectas en pantalla*/
function mostrarLetras(letra,botones){

   let acerto = false;
   botones.disabled = true;
   let letrasCorrectas = document.querySelectorAll("#palabraAdivinar span");
   var espacioErrores = document.getElementById("letrasIncorrectas");
   
    for(var i = 0; i < palabraSecreta.length; i++){

        if(letra == palabraSecreta[i]){
            letrasCorrectas[i].innerHTML = letra;
            acerto = true;
            numAciertos++;
        }   
    }

    if (acerto == false){
        
        var error = document.createElement("span");
        espacioErrores.appendChild(error);
        error.innerHTML = letra;
        numErrores++;

        dibujarAhorcado(numErrores);
    }

    /*Esta linea solo verifica que la palabra clicada este en la palabra secreta*/
    console.log( "la letra " + letra + " en la palabra " + palabraSecreta + " ¿existe?: " + acerto );
    finJuego();
    
}

/*muestra un mensaje al final del juego*/
function finJuego(){

    document.getElementById("msjFinal").innerHTML = "";
    
    if(numAciertos == palabraSecreta.length){

        document.getElementById("msjFinal").innerHTML = "<p>Felicidades</p><p>GANASTE 🔥😎</p>";
        document.getElementById("botonesLetras").style.display = "none";
        
    }

    else if(numErrores == 9){

        document.getElementById("msjFinal").innerHTML = "<p>PERDISTE 💩</p><p>La palabra secreta era " + palabraSecreta + "</p>";
        document.getElementById("botonesLetras").style.display = "none";

    }
    
}


    









