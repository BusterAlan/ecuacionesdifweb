const error = document.querySelector('.error')
const correct = document.querySelector('.correct')

function paso1Ejecucion() {
    const mensajes = paso1Colecta();
    paso1Mensaje(mensajes);
}

function paso1Colecta() {
    const masa = parseFloat(document.getElementById('masa').value);
    const constanteresorte = parseFloat(document.getElementById('constanteresorte').value);
    const posRaw = document.getElementById('posicionI').value;
    const posicionI = parseFloat(posRaw);
    const velocityRaw = document.getElementById('velocidadI').value;
    const velocidadI = parseFloat(velocityRaw);

    const mensajes = [];
    //Validar nulos y no numéricos
    if (
        masa === "" || constanteresorte === "" || posicionI === "" ||
        velocidadI === "" || isNaN(masa) || isNaN(constanteresorte) || isNaN(posicionI) ||
        isNaN(velocidadI)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar masa
    if (masa != 3.0) {
        mensajes.push("* La masa es incorrecta");
    }
    // Validar constante resorte
    if (constanteresorte != 27.0) {
        mensajes.push("* La constante de resorte es incorrecta");
    }
    // Validar la posición inicial
    if (posicionI != 0.2 && posRaw != "1/5") {
        mensajes.push("* La posición inicial es incorrecta");
    }
    // Validar la velocidad inicial
    if (velocidadI != 0.5 && velocityRaw != "1/2") {
        mensajes.push("* La velocidad inicial es incorrecta");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!", true);
    }
    return mensajes;
}

function paso1Mensaje(mensajes) {
    const mensajes1 = document.getElementById('mensajes1');
    const zone2 = document.getElementById('zone2');
    mensajes1.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes1.classList.remove("error");
        mensajes1.classList.add("correct"); 
        mensajes1.innerHTML = mensajes[0];
        zone2.style.display = "block";

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

function paso2Ejecucion() {
    const mensajes = paso2Colecta();
    paso2Mensaje(mensajes);
}

function paso2Colecta() {
    const constanteresorte2 = parseFloat(document.getElementById('constanteresorte2').value);
    const masa2 = parseFloat(document.getElementById('masa2').value);
    const resultado1 = parseFloat(document.getElementById('resultado1').value);
    const resultado2 = parseFloat(document.getElementById('resultado2').value);

    const mensajes = [];
    //Validar nulos y no numéricos
    if (
        constanteresorte2 === "" || masa2 === "" || resultado1 === "" ||
        resultado2 === "" || isNaN(constanteresorte2) || isNaN(masa2) || isNaN(resultado1) ||
        isNaN(resultado2)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar constante resorte
    if (constanteresorte2 != 27.0) {
        mensajes.push("* La constante de resorte es incorrecta");
    }
    // Validar masa
    if (masa2 != 3.0) {
        mensajes.push("* La masa es incorrecta");
    }
    // Validar la operación para aplicarle el radical
    if (resultado1 != 9.0) {
        mensajes.push("* El valor interno de la raíz es incorrecto");
    }
    // Validar el resultado de la sección
    if (resultado2 != 3.0) {
        mensajes.push("* El resultado de la sección está mal");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!", true);
    }
    return mensajes;
}

function paso2Mensaje(mensajes) {
    const mensajes2 = document.getElementById('mensajes2');
    const mensajeFinal = document.getElementById('mensajeFinal');
    const zone3 = document.getElementById('zone3');
    const zone4 = document.getElementById('zone4');
    mensajes2.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes2.classList.remove("error");
        mensajes2.classList.add("correct"); 
        mensajes2.innerHTML = mensajes[0];
        zone3.style.display = "block";
        zone4.style.display = "block";
        mensajeFinal.classList.remove("error");
        mensajeFinal.classList.add("correct"); 
        mensajeFinal.innerHTML = "Correcto! Terminaste el ejercicio 2";
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
    mensajeFinal.style.display = "block";
}
