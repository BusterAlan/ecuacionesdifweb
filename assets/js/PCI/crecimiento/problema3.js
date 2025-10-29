const error = document.querySelector('.error')
const correct = document.querySelector('.correct')

function paso1Ejecucion() {
    const mensajes = paso1Colecta();
    paso1Mensaje(mensajes);
}

function paso1Colecta() {
    const tiempoI = parseFloat(document.getElementById('tiempoI').value);
    const poblacionI = parseFloat(document.getElementById('poblacionI').value);
    const potenciaI = parseFloat(document.getElementById('potenciaI').value);
    const tiempoF = parseFloat(document.getElementById('tiempoF').value);
    const poblacionF = parseFloat(document.getElementById('poblacionF').value);
    const potenciaF = parseFloat(document.getElementById('potenciaF').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        tiempoI === "" || poblacionI === "" || potenciaI === "" ||
        tiempoF === "" || poblacionF === "" || potenciaF === "" ||
        isNaN(tiempoI) || isNaN(poblacionI) || isNaN(potenciaI) ||
        isNaN(tiempoF) || isNaN(poblacionF) || isNaN(potenciaF)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar los tiempos
    if (tiempoI !== 3 || tiempoF !== 10) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Validar las poblaciones
    if (poblacionI !== 400 || poblacionF !== 2000) {
        mensajes.push("* La población es incorrecta");
    }
    // Validar las potencias
    if (potenciaI !== 3 || potenciaF !== 10) {
        mensajes.push("* La potencia t es incorrecta");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora las C se igualan y se reduce e y la cantidad. Luego se aplica logaritmo natural en ambos lados para eliminar la e. Favor de completar el despeje para k:",true);
    }
    return mensajes;
}

function paso1Mensaje(mensajes) {
    const mensajes1 = document.getElementById('mensajes1');
    const show2nd = document.getElementById('show2nd');
    const showC2 = document.getElementById('showC2');
    const showC1 = document.getElementById('showC1');
    mensajes1.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes1.classList.remove("error");
        mensajes1.classList.add("correct"); 
        mensajes1.innerHTML = mensajes[0];
        show2nd.style.display = "block";
        showC2.style.display = "block";
        showC1.style.display = "block";

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






function paso2Colecta() {
    const despeje1 = document.getElementById('despeje1').value;
    const despeje2 = parseFloat(document.getElementById('despeje2').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        despeje1==="" || isNaN(despeje2)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
     // Validar
     if (despeje1 !== "ln(5)" || despeje2 !== 7) {
        mensajes.push("* El despeje es incorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora conociendo t=3 y k=0.23, se aplican a la fórmula. Favor de completar el despeje para C:",true);
    }
    return mensajes;
}

function paso2Mensaje(mensajes) {
    const mensajes2 = document.getElementById('mensajes2');
    const show3th = document.getElementById('show3th');
    const showk = document.getElementById('showk')
    mensajes2.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes2.classList.remove("error");
        mensajes2.classList.add("correct"); 
        mensajes2.innerHTML = mensajes[0];
        show3th.style.display = "block";
        showk.style.display = "block";

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
    const tasa_k = parseFloat(document.getElementById('tasa_k').value);
    const tiempo_ = document.getElementById('tiempo_').value;

    const mensajes = [];
    //Validar nulos
    if (
        isNaN(tasa_k) || isNaN(tiempo_)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar Tiempo
    if (tasa_k !== 0.23 || tiempo_ !== "-3") {
        mensajes.push("* El despeje en las potencias es incorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora que conocemos la población solamente queda plantearse la siguiente pregunta:",true);
        var resultadoCC = " = 200.6";
        document.getElementById("resultadoCC").innerHTML = resultadoCC;
    }
    return mensajes;
}

function paso3Mensaje(mensajes) {
    const mensajes3 = document.getElementById('mensajes3');
    const show4th = document.getElementById('show4th');
    mensajes3.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes3.classList.remove("error");
        mensajes3.classList.add("correct"); 
        mensajes3.innerHTML = mensajes[0];
        show4th.style.display = "block";

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