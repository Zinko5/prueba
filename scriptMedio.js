function cambiaTexto() {
    demo.innerHTML = "Texto cambiado";
}

document.getElementById("demoBoton").addEventListener("click", cambiaTexto);

let formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", enviar)

function enviar(evento) {
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    if (nombre === "" || edad === "") {
        alert("Llenar todos los campos");
    } else if(edad > 18){
        alert("Debes ser mayor de 18 años");
    }
    else{
        alert("Formulario enviado. nombre: " + nombre + " edad: " + edad);
    }
}

let demo = document.getElementById("demo");

function visibilidad() {
    if (demo.style.display === "none") {
        demo.style.display = "block";
    } else {
        demo.style.display = "none";
    }
}

document.getElementById("botonVisibilidad").addEventListener("click", visibilidad);



document.getElementById("botonColor").addEventListener("click", cambiaColor);

function cambiaColor() {
    if (demo.style.color != "blue") {
        demo.style.color = "blue";
    } else {
        demo.style.color = "red";
    }
}

document.getElementById("botonLink").addEventListener("click", revelar);

const link = document.getElementById("link");

function revelar() {
    if (link.style.display === "block") {
        link.style.display = "none";
    } else {
        link.style.display = "block";
    }
}