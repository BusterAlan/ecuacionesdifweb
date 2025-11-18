const problemasOAS = [
    {
        id: 1,
        enunciado: "Un resorte con una masa de 2 kg tiene una constante de resorte de 18 N/m. Si la masa se desplaza 0.5 m desde su posición de equilibrio y se suelta sin velocidad inicial, determine la ecuación del movimiento.",
        datos: {
            masa: 2.0,
            constanteResorte: 18.0,
            posicionInicial: 0.5,
            posicionInicialAlternativa: "1/2",
            velocidadInicial: 0.0
        },
        paso2: {
            resultadoRaiz: 9.0,
            frecuenciaAngular: 3.0
        },
        solucion: {
            A: "1/2",
            ADecimal: 0.5,
            B: "0",
            omega: 3
        }
    },
    {
        id: 2,
        enunciado: "Una masa de 3 kg está unida a un resorte con una constante elástica de 27 N/m. La masa se desplaza 0.2 m desde su posición de equilibrio y se suelta con una velocidad inicial de 0.5 m/s. Determina la ecuación del movimiento de la masa.",
        datos: {
            masa: 3.0,
            constanteResorte: 27.0,
            posicionInicial: 0.2,
            posicionInicialAlternativa: "1/5",
            velocidadInicial: 0.5,
            velocidadInicialAlternativa: "1/2"
        },
        paso2: {
            resultadoRaiz: 9.0,
            frecuenciaAngular: 3.0
        },
        solucion: {
            A: "1/5",
            ADecimal: 0.2,
            B: "1/6",
            BDecimal: 0.16,
            omega: 3
        }
    },
    {
        id: 3,
        enunciado: "Un bloque de 1.5 kg está conectado a un resorte con una constante de resorte de 12 N/m. Desde una posición 0.3 m por encima del equilibrio, se suelta con una velocidad inicial de -0.6 m/s (dirigida hacia arriba). Encuentra la ecuación del movimiento del sistema masa resorte.",
        datos: {
            masa: 1.5,
            masaAlternativa: "1 1/2",
            constanteResorte: 12.0,
            posicionInicial: -0.3,
            posicionInicialAlternativa: "-3/10",
            velocidadInicial: -0.6,
            velocidadInicialAlternativa: "-3/5"
        },
        paso2: {
            resultadoRaiz: 8.0,
            frecuenciaAngular: 2.82,
            frecuenciaAngularExacta: "2√2"
        },
        solucion: {
            A: "-3/10",
            ADecimal: "-0.3",
            B: "-3√2/20",
            BDecimal: "-0.21",
            omega: "2√2"
        }
    }
];

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = problemasOAS;
}
