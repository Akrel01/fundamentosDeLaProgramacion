//Operadores

const resultado3 = 10 % 3;
console.log(resultado3);

//Operadores de asignacion

let numero = 10; 
//numero = numero + 5; 
numero += 5;
console.log(numero);

//Operadores de comparacion:

const resultado = 7 > 1 ? "El primer valor es mayor que el segundo" : "El segundo valor no es mayor que el primer valor";
console.log(resultado);



//Operadores logicos 
      
const nombre = "carlos";
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true



//Ejemplo #1 - &&
const permitirAcceso = edad >= 18 && tieneEntrada;
console.log("Acceso permitido al concierto:" + permitirAcceso);


//Ejemplo #2 - or

//const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
//console.log("Acceso permitido al concierto:" + permitirAcceso);
