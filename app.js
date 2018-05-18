function enviar() {
    document.getElementById('nombre').innerHTML = 'Bienvenida ' +
        document.getElementById('nameInput').value;
}

function respuestas() {
    if {
        document.getElementById("right").innerHTML =
            document.getElementById("si").value +
            "<p>Correcto, no han egresado hombres</p>";
    } else {
        document.getElementById("wrong").innerHTML =
            document.getElementById("no").value +
            "<p>Incorrecto, No han egresado hombres</p>";
    }
}


/* var answer2 = prompt("¿hay laboratoria en concepción? s/n");
    if (answer2.toLowerCase() == "n") {
        document.getElementById("rightAnswersText").innerHTML =
            document.getElementById("rightAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No hay laboratoria en concepción</p>"
        "</div>";
    } else {
        document.getElementById("wrongAnswersText").innerHTML =
            document.getElementById("wrongAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No hay laboratoria en concepción</p>"
        "</div>";
    }
} else {
    document.getElementById("warningMessage").innerText = "Bueno Chao";
}*/