// Este es tu primer script en JavaScript
console.log("¡Hola desde JavaScript!");

// Cambiar el texto dentro del párrafo con id 'demo'
document.getElementById("demo").innerHTML = "¡JavaScript está funcionandoooo!";

// Agregar un evento al botón para que haga algo cuando se clickee
// document.getElementById("demoBoton").addEventListener("click", function() {
//     alert("¡Hola, has hecho clic en el botón!");
// });

let nombre = 'Juan';
console.log(nombre);

nombre = 'Jose';
console.log("el nuevo nombre es " + nombre);

function saludar() {
    console.log("¡Hola, bienvenido a mi página!");
}

function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 10); // resultado es 15
console.log("El resultado es: " + resultado);

// Función interactiva que cambia el contenido del DOM
function cambiarTexto() {
    document.getElementById("demo").innerHTML = "El texto ha sido cambiado por JavaScript!";
}

// Agregar un evento al botón para que llame a la función cambiarTexto
document.getElementById("demoBoton").addEventListener("click", cambiarTexto);