function redirect(args) {
    switch (args) {

        case "welcome":
            document.getElementById('welcome').scrollIntoView();
            break;
        case "photos":
            document.getElementById('carouselExampleControls').scrollIntoView();
            break;
        case "riddle":
            document.getElementById('riddle-form').scrollIntoView();
            break;
        case "contact":
            document.getElementById('contact').scrollIntoView();
            break;
    }
}

window.onload = function () {
    document.getElementById("contact-form").addEventListener("click", function (event) {
        event.preventDefault()
    });
}

var intentos = 4;
var correcto = false;
function riddleTry() {
    respuesta = document.getElementById('riddle-text').value
    if (respuesta != 'perro') {
        respuestaIncorrecta()
    } else {
        respuestaCorrecta()
    }
}

function respuestaIncorrecta() {
    console.log(intentos)
    intentos =  intentos - 1;
    switch (intentos) {
        case 3:
            document.getElementById("intentos").innerText = "Te quedan 3 intentos"
            break
        case 2:
            document.getElementById("intentos").innerText = "Te quedan 2 intentos"
            document.getElementById("ayuda").innerText = "También juegan a la pelota"
            break
        case 1:
            document.getElementById("intentos").innerText = "Te quedan 1 intentos"
            document.getElementById("ayuda").innerText = "Y son muy peludos!"
            break
        case 0:
            document.getElementById("intentos").innerText = "No te quedan intentos"
            document.getElementById('riddle-text').disabled = true
            break
    }
}
function respuestaCorrecta() {
            document.getElementById("intentos").innerText = ""
            document.getElementById("ayuda").innerText = "Correcto!"
            document.getElementById("ayuda").style["color"] = "green"
 }
