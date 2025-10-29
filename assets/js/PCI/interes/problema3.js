const error = document.querySelector('.error')
const correct = document.querySelector('.correct')

function paso1Colecta() {
    const tiempo1 = parseFloat(document.getElementById('tiempo1').value);
    const cantidad1 = parseFloat(document.getElementById('cantidad1').value);
    const potenciaT1 = parseFloat(document.getElementById('potenciaT1').value);
    const interes = parseFloat(document.getElementById('interes').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        isNaN(tiempo1) || isNaN(cantidad1) || isNaN(potenciaT1) || isNaN(interes)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar los tiempos
    if (tiempo1 !== 0) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Validar las cantidades
    if (cantidad1 !== 50000) {
        mensajes.push("* La cantidad es incorrecta");
    }
    // Validar las potencias
    if (potenciaT1 !== 0) {
        mensajes.push("* La potencia t es incorrecta");
    }
    // Validar las potencias
    if (interes !== 0.15) {
        mensajes.push("* La tasa de interés es incorrecta");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora se sustituyen los valores en la solución. Favor de construir la fórmula:",true);
        document.getElementById("cIn").textContent = " ➔ C = 50000";
    }
    return mensajes;
}

function paso1Mensaje(mensajes) {
    const mensajes1 = document.getElementById('mensajes1');
    const show2nd = document.getElementById('show2nd');
    mensajes1.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes1.classList.remove("error");
        mensajes1.classList.add("correct"); 
        mensajes1.innerHTML = mensajes[0];
        show2nd.style.display = "block";

      } else {
        mensajes1.classList.remove("correct");
        mensajes1.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes1.appendChild(lista);
      }

    mensajes1.style.display = "block";
}

function paso1Ejecucion() {
    const mensajes = paso1Colecta();
    paso1Mensaje(mensajes);
}





function paso2Colecta() {
    const cantidad2 = parseFloat(document.getElementById('cantidad2').value);
    const interes2 = parseFloat(document.getElementById('interes2').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        isNaN(cantidad2) || isNaN(interes2)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar la cantidad
    if (cantidad2 !== 50000) {
        mensajes.push("* La cantidad es incorrecta");
    }
    // Validar el interes
    if (interes2 !== 0.15) {
        mensajes.push("* La tasa de interés es incorrecta");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, esta fórmula nos ayudará a encontrar la cantidad de dinero respecto a la inversión y tiempo. Favor de utilizar la fórmula respecto a t:",true); 
        var formulaAt = " ➔ <strong>A(t) = 50000e<sup>0.15t</sup></strong>";
        document.getElementById("formulaAt").innerHTML = formulaAt;
    }
    return mensajes;
}

function paso2Mensaje(mensajes) {
    const mensajes2 = document.getElementById('mensajes2');
    const show3th = document.getElementById('show3th');
    mensajes2.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes2.classList.remove("error");
        mensajes2.classList.add("correct"); 
        mensajes2.innerHTML = mensajes[0];
        show3th.style.display = "block";

      } else {
        mensajes2.classList.remove("correct");
        mensajes2.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes2.appendChild(lista);
      }

    mensajes2.style.display = "block";
}

function paso2Ejecucion() {
    const mensajes = paso2Colecta();
    paso2Mensaje(mensajes);
}





function paso3Colecta() {
    const tiempoPasado1 = parseFloat(document.getElementById('tiempoPasado1').value);
    const tiempoPasado2 = parseFloat(document.getElementById('tiempoPasado2').value);

    const mensajes = [];
    //Validar nulos
    if (
        isNaN(tiempoPasado1) || isNaN(tiempoPasado2)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar tiempos
    if (tiempoPasado1 !== 15 || tiempoPasado2 !== 15) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, la cantidad despúes de 15 años sería $474386.79",true);
        document.getElementById("centavos").textContent = " ➔ A(15) = 474386.79";
    }
    return mensajes;
}

function paso3Mensaje(mensajes) {
    const mensajes3 = document.getElementById('mensajes3');
    mensajes3.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes3.classList.remove("error");
        mensajes3.classList.add("correct"); 
        mensajes3.innerHTML = mensajes[0];

      } else {
        mensajes3.classList.remove("correct");
        mensajes3.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes3.appendChild(lista);
      }

    mensajes3.style.display = "block";
}

function paso3Ejecucion() {
    const mensajes = paso3Colecta();
    paso3Mensaje(mensajes);
}
