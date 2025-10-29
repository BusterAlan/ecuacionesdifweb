const error = document.querySelector('.error')
const correct = document.querySelector('.correct')

function paso1Colecta() {
    const tiempoI = parseFloat(document.getElementById('tiempoI').value);
    const poblacionI = parseFloat(document.getElementById('poblacionI').value);
    const potenciaI = parseFloat(document.getElementById('potenciaI').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        tiempoI === "" || poblacionI === "" || potenciaI === "" ||
        isNaN(tiempoI) || isNaN(poblacionI) || isNaN(potenciaI) 
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar los tiempos
    if (tiempoI !== 0) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Validar las poblaciones
    if (poblacionI !== 500) {
        mensajes.push("* La población es incorrecta");
    }
    // Validar las potencias
    if (potenciaI !== 0) {
        mensajes.push("* La potencia t es incorrecta");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora la población inicial de 500 miembros aumenta en un 15% en 10 años. Sustituye los datos en la fórmula P(10):",true);

        document.getElementById("c1").textContent = " ➔ C = 10000";
    }
    return mensajes;
}

function paso1Mensaje(mensajes) {
    const mensajes1 = document.getElementById('mensajes1');
    const show2nd = document.getElementById('show2nd');
    const showC2 = document.getElementById('showC2');
    mensajes1.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes1.classList.remove("error");
        mensajes1.classList.add("correct"); 
        mensajes1.innerHTML = mensajes[0];
        show2nd.style.display = "block";
        showC2.style.display = "block";

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
    const tiempoPasado = parseFloat(document.getElementById('tiempoPasado').value);
    const poblacionI1 = parseFloat(document.getElementById('poblacionI1').value);
    const tasa = parseFloat(document.getElementById('tasa').value);
    const poblacionI2 = parseFloat(document.getElementById('poblacionI2').value);
    const entre100 = parseFloat(document.getElementById('entre100').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        isNaN(tiempoPasado) || isNaN(poblacionI1) || isNaN(tasa) || isNaN(poblacionI2) || isNaN(entre100)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar el tiempo transcurrido
    if (tiempoPasado !== 10) {
        mensajes.push("* El tiempo transcurrido es incorrecto");
    }
    // Validar las poblaciones
    if (poblacionI1 !== 500 || poblacionI2 !== 500) {
        mensajes.push("* La población es incorrecta");
    }
    // Validar la tasa
    if (tasa !== 0.015) {
        mensajes.push("* La tasa k es incorrecta");
    }
    // Ayudita
    if (entre100 !== 100) {
        mensajes.push("* La división debe ser entre 100");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora se igualan las 2 poblaciones en la fórmula. Completa el despeje para e<sup>10k</sup>:",true);

        var pt = "P(10) = 575";
        document.getElementById("pt").innerHTML = pt;
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
    const poblacionFF = parseFloat(document.getElementById('poblacionFF').value);
    const poblacionII = parseFloat(document.getElementById('poblacionII').value);

    const mensajes = [];
    //Validar nulos
    if (
        isNaN(poblacionFF) || isNaN(poblacionII)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar Despeje
    if (poblacionFF !== 575 || poblacionII !== 500) {
        mensajes.push("* El despeje es incorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, aplicando logaritmo en ambos lados se elimina e. Ahora completa el despeja para k:",true);
        var e10 = " ➔ e<sup>10k</sup> = 1.15";
        document.getElementById("e10").innerHTML = e10;
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





function paso4Colecta() {
    const lne = document.getElementById('lne').value;
    const entre10 = parseFloat(document.getElementById('entre10').value);
    

    const mensajes = [];
    //Validar nulos
    if (
        lne=="" || isNaN(entre10)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar 
    if (lne !== "ln(1.15)" || entre10 !== 10) {
        mensajes.push("* El despeje es inconrrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto! ahora teniendo la tasa k=0.014, ¿Cuál será la población pasados 30 años? Sustituye los datos en la fórmula:",true);
        var krespuesta = " ➔ k = 0.014";
        document.getElementById("krespuesta").innerHTML = krespuesta;
    }
    return mensajes;
}

function paso4Mensaje(mensajes) {
    const mensajes4 = document.getElementById('mensajes4');
    const show5th = document.getElementById('show5th');
    mensajes4.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes4.classList.remove("error");
        mensajes4.classList.add("correct"); 
        show5th.style.display = "block";
        mensajes4.innerHTML = mensajes[0];

      } else {
        mensajes4.classList.remove("correct");
        mensajes4.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes4.appendChild(lista);
      }

    mensajes4.style.display = "block";
}

function paso4Ejecucion() {
    const mensajes = paso4Colecta();
    paso4Mensaje(mensajes);
}





function paso5Colecta() {   
    const tiempo__ = parseFloat(document.getElementById('tiempo__').value);
    const tasa_k = parseFloat(document.getElementById('tasa_k').value);
    const tiempo_ = parseFloat(document.getElementById('tiempo_').value);

    const mensajes = [];
    //Validar nulos
    if (
        isNaN(tiempo__) || isNaN(tasa_k) || isNaN(tiempo_)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar Tiempo
    if (tiempo__ !== 30 || tiempo_ !== 30) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Validar exponente k
    if ( tasa_k !== 0.014) {
        mensajes.push("* El exponente k es incorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Felicidades!, has resuelto un problema de crecimiento poblacional de condiciones iniciales",true);
        var poblacionRR = "≈ 760 habitantes";
        document.getElementById("poblacionRR").innerHTML = poblacionRR;
    }
    return mensajes;
}

function paso5Mensaje(mensajes) {
    const mensajes5 = document.getElementById('mensajes5');
    mensajes5.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes5.classList.remove("error");
        mensajes5.classList.add("correct"); 
        mensajes5.innerHTML = mensajes[0];

      } else {
        mensajes5.classList.remove("correct");
        mensajes5.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes5.appendChild(lista);
      }

    mensajes5.style.display = "block";
}

function paso5Ejecucion() {
    const mensajes = paso5Colecta();
    paso5Mensaje(mensajes);
}