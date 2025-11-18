// Generador dinámico de problemas OAS
class GeneradorProblemasOAS {
    constructor(config) {
        this.config = config;
        this.problemaActual = null;
    }

    // Generar HTML del problema
    generarHTML(problema) {
        this.problemaActual = problema;
        
        return `
            <section class="features" id="contacto" style="background: hsl(0, 0%, 100%); margin-top: -80px;">
                <div class="container">
                    <p class="section-subtitle" style="font-size: 1.5em; font: weight 20px;">Problema ${problema.id}</p>
                    <p style="text-align: justify; line-height: 1.6;">
                        ${problema.enunciado}
                    </p>
                    <br>
                    <p style="text-decoration: underline;">
                        Si vas a usar fracciones mixtas, favor de ponerlas con espacio (y siempre simplifica) 
                        <strong style="background-color: yellow;">ejemplo: 3 4/5</strong>
                    </p>
                    ${problema.paso2.frecuenciaAngularExacta ? `
                    <p style="text-decoration: underline;">
                        Si vas a escribir decimales, favor de ponerlas con dos decimales 
                        <strong style="background-color: yellow;">ejemplo: 9.81</strong>
                    </p>` : ''}
                    <br>
                    <br>

                    <label class="label_PCI"><strong>Datos generales</strong></label>
                    <form>
                        <br>
                        ${this.generarCampoDato('m', 'masa')}
                        <br>
                        ${this.generarCampoDato('k', 'constante de resorte', 'constanteresorte')}
                        <br>
                        ${this.generarCampoDato('x<sub>0</sub>', 'posición inicial', 'posicionI')}
                        <br>
                        ${this.generarCampoDato('v<sub>0</sub>', 'velocidad inicial', 'velocidadI')}
                        <br>
                        <div class="contenedor-problema">
                            <button type="button" onclick="validarPaso1(${problema.id})" class="btn-customized">Revisar</button>
                            <div id="mensajes1_${problema.id}" class="error correct"></div>
                        </div>
                    </form>
                    <br><br>

                    ${this.generarPaso2(problema)}
                    ${this.generarPaso3(problema)}
                    ${this.generarPaso4(problema)}
                </div>
            </section>
        `;
    }

    generarCampoDato(label, placeholder, id = null) {
        const inputId = id || placeholder.replace(/\s+/g, '');
        return `
            <div class="contenedor-problema">
                <label class="label_PCI">${label} = </label>
                <input class="input_tiempopoblacion" type="text" id="${inputId}_${this.problemaActual.id}" 
                       required placeholder="${placeholder}">
            </div>
        `;
    }

    generarPaso2(problema) {
        return `
            <form style="display: none;" id="zone2_${problema.id}">
                <label class="label_PCI"><strong>Frecuencia angular</strong></label>
                <br><br>
                <div class="contenedor-problema">
                    <label class="label_PCI">w = &radic;</label>
                    <input class="input_tiempopoblacion" type="text" id="constanteresorte2_${problema.id}" 
                           required placeholder="k">
                    /
                    <input class="input_tiempopoblacion" type="text" id="masa2_${problema.id}" 
                           required placeholder="m">
                    =
                    <label class="label_PCI">&radic;</label>
                    <input class="input_tiempopoblacion" type="text" id="resultado1_${problema.id}" 
                           required placeholder="resultado">
                    =
                    <input class="input_tiempopoblacion" type="text" id="resultado2_${problema.id}" 
                           required placeholder="rad/s">
                </div>
                <br>
                <div class="contenedor-problema">
                    <button type="button" onclick="validarPaso2(${problema.id})" class="btn-customized">Revisar</button>
                    <div id="mensajes2_${problema.id}" class="error correct"></div>
                </div>
            </form>
            <br><br>
        `;
    }

    generarPaso3(problema) {
        return `
            <form style="display: none;" id="zone3_${problema.id}">
                <label class="label_PCI"><strong>Aplicar condiciones iniciales</strong></label>
                <br><br>
                <p style="text-align: justify; line-height: 1.6;">
                    Recordando nuestra forma general de solución <strong>x(t)=Acos(ωt)+Bsin(ωt)</strong>,
                    y sabiendo que <strong>x(0)</strong>, entonces:
                </p>
                <br>
                <div class="contenedor-problema">
                    <label class="label_PCI">x(0) = A = <strong>${problema.solucion.A}${problema.solucion.ADecimal ? ' = ' + problema.solucion.ADecimal : ''}</strong></label>
                </div>
                <br>
                <div class="contenedor-problema">
                    <label class="label_PCI">x'(0) = B = <strong>${problema.solucion.B}${problema.solucion.BDecimal ? ' ≈ ' + problema.solucion.BDecimal : ''}</strong></label>
                </div>
            </form>
            <br><br>
        `;
    }

    generarPaso4(problema) {
        return `
            <form style="display: none;" id="zone4_${problema.id}">
                <label class="label_PCI"><strong>Construcción de la solución</strong></label>
                <br><br>
                <div class="contenedor-problema">
                    <label class="label_PCI">x(t) = <strong>${problema.solucion.A}</strong> • cos(<strong>${problema.solucion.omega}</strong>t)${problema.solucion.B !== '0' ? ' + <strong>' + problema.solucion.B + '</strong> • sin(<strong>' + problema.solucion.omega + '</strong>t)' : ''}</label>
                </div>
                <br>
                <div class="contenedor-problema">
                    <div id="mensajeFinal_${problema.id}" class="error correct"></div>
                </div>
            </form>
            <br><br>
        `;
    }

    // Validar paso 1
    validarPaso1(problemaId) {
        const problema = this.config.find(p => p.id === problemaId);
        if (!problema) return;

        const masa = parseFloat(document.getElementById(`masa_${problemaId}`).value);
        const masaRaw = document.getElementById(`masa_${problemaId}`).value;
        const constanteresorte = parseFloat(document.getElementById(`constanteresorte_${problemaId}`).value);
        const posicionI = parseFloat(document.getElementById(`posicionI_${problemaId}`).value);
        const posRaw = document.getElementById(`posicionI_${problemaId}`).value;
        const velocidadI = parseFloat(document.getElementById(`velocidadI_${problemaId}`).value);
        const velocityRaw = document.getElementById(`velocidadI_${problemaId}`).value;

        const mensajes = [];

        // Validar nulos
        if ([masa, constanteresorte, posicionI, velocidadI].some(v => isNaN(v))) {
            mensajes.push("* Favor de llenar todos los campos");
        }

        // Validar masa
        if (masa !== problema.datos.masa && (!problema.datos.masaAlternativa || masaRaw !== problema.datos.masaAlternativa)) {
            mensajes.push("* La masa es incorrecta");
        }

        // Validar constante
        if (constanteresorte !== problema.datos.constanteResorte) {
            mensajes.push("* La constante de resorte es incorrecta");
        }

        // Validar posición
        if (posicionI !== problema.datos.posicionInicial && posRaw !== problema.datos.posicionInicialAlternativa) {
            mensajes.push("* La posición inicial es incorrecta");
        }

        // Validar velocidad
        const velocidadCorrecta = velocidadI === problema.datos.velocidadInicial || 
                                 (problema.datos.velocidadInicialAlternativa && velocityRaw === problema.datos.velocidadInicialAlternativa);
        if (!velocidadCorrecta) {
            mensajes.push("* La velocidad inicial es incorrecta");
        }

        // Mostrar resultado
        this.mostrarMensaje(`mensajes1_${problemaId}`, mensajes, `zone2_${problemaId}`);
    }

    // Validar paso 2
    validarPaso2(problemaId) {
        const problema = this.config.find(p => p.id === problemaId);
        if (!problema) return;

        const constanteresorte2 = parseFloat(document.getElementById(`constanteresorte2_${problemaId}`).value);
        const masa2 = parseFloat(document.getElementById(`masa2_${problemaId}`).value);
        const masa2Raw = document.getElementById(`masa2_${problemaId}`).value;
        const resultado1 = parseFloat(document.getElementById(`resultado1_${problemaId}`).value);
        const resultado2 = parseFloat(document.getElementById(`resultado2_${problemaId}`).value);

        const mensajes = [];

        if ([constanteresorte2, masa2, resultado1, resultado2].some(v => isNaN(v))) {
            mensajes.push("* Favor de llenar todos los campos");
        }

        if (constanteresorte2 !== problema.datos.constanteResorte) {
            mensajes.push("* La constante de resorte es incorrecta");
        }

        if (masa2 !== problema.datos.masa && (!problema.datos.masaAlternativa || masa2Raw !== problema.datos.masaAlternativa)) {
            mensajes.push("* La masa es incorrecta");
        }

        if (resultado1 !== problema.paso2.resultadoRaiz) {
            mensajes.push("* El valor interno de la raíz es incorrecto");
        }

        if (resultado2 !== problema.paso2.frecuenciaAngular) {
            mensajes.push("* El resultado de la sección está mal");
        }

        this.mostrarMensaje(`mensajes2_${problemaId}`, mensajes, `zone3_${problemaId}`, `zone4_${problemaId}`, 
                           `mensajeFinal_${problemaId}`, `Correcto! Terminaste el ejercicio ${problemaId}`);
    }

    // Método auxiliar para mostrar mensajes
    mostrarMensaje(mensajeId, errores, ...zonasAMostrar) {
        const mensajeDiv = document.getElementById(mensajeId);
        mensajeDiv.innerHTML = '';

        if (errores.length === 0) {
            mensajeDiv.classList.remove("error");
            mensajeDiv.classList.add("correct");
            mensajeDiv.innerHTML = "Correcto!";
            
            zonasAMostrar.forEach(zona => {
                const elemento = document.getElementById(zona);
                if (elemento) {
                    if (zona.includes('mensajeFinal')) {
                        elemento.classList.add("correct");
                        elemento.innerHTML = zonasAMostrar[zonasAMostrar.length - 1];
                    }
                    elemento.style.display = "block";
                }
            });
        } else {
            mensajeDiv.classList.remove("correct");
            mensajeDiv.classList.add("error");
            
            const lista = document.createElement('ul');
            errores.forEach(error => {
                const errorItem = document.createElement('li');
                errorItem.innerText = error;
                lista.appendChild(errorItem);
            });
            mensajeDiv.appendChild(lista);
        }

        mensajeDiv.style.display = "block";
    }
}

// Instancia global
const generadorOAS = new GeneradorProblemasOAS(problemasOAS);

// Funciones globales para los botones
function validarPaso1(id) {
    generadorOAS.validarPaso1(id);
}

function validarPaso2(id) {
    generadorOAS.validarPaso2(id);
}
