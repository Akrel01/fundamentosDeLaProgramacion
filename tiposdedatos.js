// Cadena de texto
const name ="textooooooo";
const parrafo = "Este es un parrafo";
const parrafo2 = "Este es un \"parrafo\""; //usar comillas dobles en tipo de dato texto.

// numero 
 const numero = 5456;
 const numero2 = -5615.6;

//booleano
const usuarioConectado = false;
const mayorQue = 10>2;

console.log(mayorQue);

//Arrays
const Arrays = ["texto", 456, true, {propiedad:"valor"},[1,2,3]]; 
console.log(Arrays);

/*Objetos 
-Guarda informacion en parejas, propiedad y valor*/
    
const persona = {

    nombre: "Juan" , 
    edad: 50 ,
    carro: { 
        marca: "Hyunday" ,
        color: "azul" ,
    }, 
};
console.log(persona.carro); //el punto es para acceder al valor exacto.


//Funciones 
function hola() {
    console.log("Hola");
}
hola();  //<--- asi se llama una funcion, se usa para reutilizar codigo.

//Null
const miVariable = null;

//Undefined
const miVariable2 = undefined;

