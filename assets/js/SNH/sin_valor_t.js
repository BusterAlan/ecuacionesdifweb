var A1,A2,A4,B1,B2,B4;
var λ1,λ2;
var a1,b1;

const error = document.querySelector('.error')
const correct = document.querySelector('.correct')

async function paso1() {
    const mensajes = await colecta();
    aviso(mensajes);
}

async function colecta() {
	const input1 = document.getElementById('X').value.toUpperCase();
	const input2 = document.getElementById('Y').value.toUpperCase();

	const mensajes = [];
	//Validar que contenga X y Y
	if (!input1.includes("X") || !input1.includes("Y")) {
		mensajes.push("* La ecuación 1 debe contener las variable X y Y");
	}
	if (!input2.includes("X") || !input2.includes("Y")) {
		mensajes.push("* La ecuación 2 debe contener las variables X y Y");
	}
	// Todo correcto
	if (mensajes.length === 0) {
		mensajes.push("Los coeficientes obtenidos del par de ecuaciones se sustituyen en la fórmula del polinomio característico:",true);
		const X = await sacarConstantes(input1, 'x');
		const Y = await sacarConstantes(input2, 'y');
		A1=X.A1; A2=X.A2; A4=X.A4;  B1=Y.B1; B2=Y.B2; B4=Y.B4;
		var coeficientesA = "A<sub>1</sub>="+A1+" , A<sub>2</sub>="+A2+" , A<sub>4</sub>="+A4; 
		document.getElementById("coeficientesA").innerHTML = coeficientesA;
		var coeficientesB = "B<sub>1</sub>="+B1+" , B<sub>2</sub>="+B2+" , B<sub>4</sub>="+B4; 
		document.getElementById("coeficientesB").innerHTML = coeficientesB;
		document.getElementById("A1-λ").textContent = A1+" - λ";
		document.getElementById("A2").textContent = A2;
		document.getElementById("B1").textContent = B1;
		document.getElementById("B2-λ").textContent = B2+" - λ";
		document.getElementById("MatrizProduct").textContent = "(" + X.A1 + "-λ" + ")" + "(" + Y.B2 + "-λ" + ")" + " - " + "(" + Y.B1 + "*" + X.A2 + ") = 0";
	}
	return mensajes;
}

function aviso(mensajes) {
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

function paso2() {
	var ansDiv = document.getElementById("ansDiv");
	var MatrizProduct = document.getElementById("MatrizProduct");
    MatrizProduct = MatrizProduct.textContent || MatrizProduct.innerText;

	var res = preSimplify(MatrizProduct);
	
	ansDiv.innerHTML = res.ans.replace(/λλ/g, "λ<sup>2</sup>");
	const show2ndPlus = document.getElementById('show2ndPlus');
	show2ndPlus.style.display = "block";

	const showSteps = document.getElementById('showSteps');
	showSteps.style.display = "block";

	const show3th = document.getElementById('show3th');
	show3th.style.display = "block";

	const mensajes2 = document.getElementById('mensajes2');
	mensajes2.innerHTML = "Se desarrolla el polinomio multiplicando en diagonal de arriba a abajo, menos el producto diagonal de abajo a arriba, resultando así en una ecuación cuadrática. Utilizando la ecuación general se obtienen λ<sub>1</sub> y λ<sub>2</sub>";
    mensajes2.style.display = "block";

	A4 = Math.abs(A4);
	B4 = Math.abs(B4);
	document.getElementById("A1_").textContent = A1;
	document.getElementById("A2_").textContent = A2;
	document.getElementById("A4_").textContent = A4;
	document.getElementById("B1_").textContent = B1;
	document.getElementById("B2_").textContent = B2;
	document.getElementById("B4_").textContent = B4;
} 

async function paso3() {
	const coefficients = [
		[A1, A2, 0],
		[B1, B2, 0],
	];
	const rightHandSide = [A4, B4];
	respuesta = await gaussJordan(coefficients, rightHandSide, 0);
	a1=parseFloat(respuesta[0].toFixed(2));
	b1=parseFloat(respuesta[1].toFixed(2));

	document.getElementById("a1").textContent = a1;
	document.getElementById("b1").textContent = b1;
	document.getElementById("Xc").innerHTML = "c<sub>1</sub>e<sup>("+λ1+")t</sup> + c<sub>2</sub>e<sup>("+λ2+")t</sup> + " +a1;

	const show3thPlus = document.getElementById('show3thPlus');
	show3thPlus.style.display = "block";

	const show_a1_b1 = document.getElementById('show_a1_b1');
	show_a1_b1.style.display = "block";

	const mensajes3 = document.getElementById('mensajes3');
	mensajes3.innerHTML = "Se utiliza el método de eliminación de Gauss-Jordan sustituyendo los coeficientes en la matriz. El resultado nos da a<sub>1</sub> y b<sub>1</sub>, por lo que la representación de X<sub>c</sub> está completa";
    mensajes3.style.display = "block";
}

function sacarConstantes(ecuacion, type) {
	// Utilizar expresiones regulares para extraer los valores
	const regex = /([+-]?\d*)[ ]?X|([+-]?\d*)[ ]?Y|([+-]?\d+)/g;
	var valores = ecuacion.match(regex);
	// Inicializar las variables A, B y C con valores predeterminados
	let A = 1;
	let B = 1;
	let C = 0;
	// Asignar los valores extraídos a las variables correspondientes
	if (valores) {
		valores.forEach(valor => {
			if (valor.includes("X")) {
				A = parseInt(valor) || (valor.includes("-X") ? -1 : 1);
			} else if (valor.includes("Y")) {
				B = parseInt(valor) || (valor.includes("-Y") ? -1 : 1);
			} else {
				C = parseInt(valor) || 0;
			}
		});
	}
	if (type == 'x') {
		return {
			A1: A,
			A2: B,
			A4: C
		}
	}
	if (type == 'y') {
		return {
			B1: A,
			B2: B,
			B4: C
		}
	}
}          

function preSimplify(equation) {
	steps = [];
	equation = equation.split(" ").join(""); //remove all whitespace for simplicity
	equation = equation.split("--").join("+"); //double negative = pos
	if (equation.includes("=")) {
		//moves all to 1 side. For example,
		// x=1+y becomes x-(1+y)=0
		equation = equation.split("=").join("-(");
		equation += ")";
		addStep("Move to One Side", equation + " = 0");
		var equalsZero = true; //whether or not the answer should end in ' = 0'
	} else {
		var equalsZero = false;
	}
	equation = simplify(equation);
	equation = combLikeTerms(equation);
	if (equalsZero) {
		equation += " = 0";
	}
	ecuacionPolinomio = equation;
	formulaGeneral(equation);
	return {
		ans: equation,
		steps: steps
	};
}

function simplify(equation) {
	equation = addSub(equation); //first deal with addition and subtraction
	return equation;
}

function formulaGeneral(equation) {
	let ecuacion = equation.replace(/= 0/g, '');
	// Utilizar expresiones regulares para extraer los valores
	const regex = /([+-]?\d*)[ ]?λλ|([+-]?\d*)[ ]?λ|([+-]?\d+)/g;
	var valores = ecuacion.match(regex);
	// Inicializar las variables A, B y C con valores predeterminados
	let A = 1;
	let B = 1;
	let C = 0;
	// Asignar los valores extraídos a las variables correspondientes
	if (valores) {
		valores.forEach(valor => {
			if (valor.includes("λλ")) {
				A = parseInt(valor) || (valor.includes("-λλ") ? -1 : 1);
			} else if (valor.includes("λ")) {
				B = parseInt(valor) || (valor.includes("-λ") ? -1 : 1);
			} else {
				C = parseInt(valor) || 0;
			}
		});
	}
	result = B * B - 4 * A * C;

	if (result >= 0) {
		x1 = (-B + Math.sqrt(result)) / (2 * A);
		x2 = (-B - Math.sqrt(result)) / (2 * A);
		document.getElementById("λ1").textContent = parseFloat(x1.toFixed(2));
		document.getElementById("λ2").textContent = parseFloat(x2.toFixed(2));
		λ1 = parseFloat(x1.toFixed(2));
		λ2 = parseFloat(x2.toFixed(2));
	} else {
		$mensaje.html('El valor es negativo');
	}
}

function gaussJordan(x, y, verbose = 0) {
	const m = x.length;
	const n = x[0].length;
	const augmentedMat = new Array(m);
	for (let i = 0; i < m; i++) {
		augmentedMat[i] = new Array(n + 1).fill(0);
		augmentedMat[i].splice(0, n, ...x[i]);
		augmentedMat[i][n] = y[i];
	}

	if (verbose > 0) {
		console.log('# Original augmented matrix');
		console.log(augmentedMat.map(row => row.map(val => val.toFixed(2))));
	}

	const outerLoop = [
		[0, m - 1, 1],
		[m - 1, 0, -1]
	];

	for (let d = 0; d < 2; d++) {
		for (let i = outerLoop[d][0]; d === 0 ? i <= outerLoop[d][1] : i >= outerLoop[d][1]; i += outerLoop[d][2]) {
			const innerLoop = [
				[i + 1, m, 1],
				[i - 1, -1, -1]
			];

			for (let j = innerLoop[d][0]; d === 0 ? j < innerLoop[d][1] : j > innerLoop[d][1]; j += innerLoop[d][2]) {
				const k = (-1) * augmentedMat[j][i] / augmentedMat[i][i];
				const tempRow = augmentedMat[i].map(val => k * val);

				if (verbose > 1) {
					console.log(`# Use line ${i + 1} for line ${j + 1}`);
					console.log(`k=${k.toFixed(2)} * [${augmentedMat[i].map(val => val.toFixed(2)).join(', ')}] = [${tempRow.map(val => val.toFixed(2)).join(', ')}]`);
				}

				augmentedMat[j] = augmentedMat[j].map((val, index) => val + tempRow[index]);

				if (verbose > 1) {
					console.log(augmentedMat.map(row => row.map(val => val.toFixed(2))));
				}
			}
		}
	}

	for (let i = 0; i < m; i++) {
		augmentedMat[i] = augmentedMat[i].map(val => val / augmentedMat[i][i]);
	}

	if (verbose > 0) {
		console.log('# Normalize the rows');
		console.log(augmentedMat.map(row => row.map(val => val.toFixed(2))));
	}

	return augmentedMat.map(row => row[n]);
}

////////////////////////////////////// Utilerías de simplify y GaussJordan //////////////////////////////////////

function combLikeTerms(equation) {
	var parts = splitAddSub(equation)[0];
	var addOrSub = splitAddSub(equation)[1];
	var original = equation;

	var vars = [];
	var coefs = [];
	for (var i = 0; i < parts.length; i++) {
		var mulParts = splitMulDiv(parts[i])[0];
		var addCoef = 1;
		var addVar = [];
		for (var j = 0; j < mulParts.length; j++) {
			if (!isNaN(mulParts[j])) {
				addCoef = percise(addCoef * mulParts[j]);
			} else {
				addVar.push(mulParts[j]);
			}
		}
		if (addOrSub[i] == "-") {
			addCoef *= -1;
		}
		addVar.sort();
		addVar = addVar.join("");
		if (vars.indexOf(addVar) != -1) {
			coefs[vars.indexOf(addVar)] = percise(coefs[vars.indexOf(addVar)] + addCoef);
		} else {
			vars.push(addVar);
			coefs.push(addCoef);
		}
	}
	var toR = [];
	for (i = 0; i < vars.length; i++) {
		if (coefs[i] == 0) {} else if (coefs[i] == 1 && vars[i].length == 0) {
			toR.push("1");
		} else if (coefs[i] == 1) {
			toR.push(vars[i]);
		} else if (coefs[i] == -1 && vars[i].length > 0) {
			toR.push("-" + vars[i]);
		} else {
			toR.push(coefs[i] + vars[i]);
		}
	}
	if (toR.length == 0) {
		return "0";
	}
	if (original != toR.join(" + ")) {
		addStep("Combine like terms", equation + " = ");
	}
	return toR.join(" + ");
}

function addSub(equation) {
	var parts = splitAddSub(equation)[0]; // splits it by + and -
	var addOrSub = splitAddSub(equation)[1]; // which are + and which are -
	var original = equation; //the original equation

	var nums = 0; //the number parts
	var vars = []; //the non-number parts
	for (var i = 0; i < parts.length; i++) {
		if (!isNaN(parts[i]) && parts[i] != 0) {
			//it is a number
			if (addOrSub[i] == "+") {
				nums = percise(nums + parseFloat(parts[i])); //add the number. percise() gets rid of JavaScript float problems
			} else {
				nums = percise(nums - parseFloat(parts[i])); //subtract the number.
			}
		} else if (isParenth(parts[i])) {
			//something in parentheses
			if (addOrSub[i] == "+") {
				vars.push(simplify(parts[i].slice(1, -1))); //simplify the inside and then add that to vars
			} else {
				vars.push(multiplyDivide("-1*(" + simplify(parts[i].slice(1, -1)) + ")")); //simplify the inside and then multiply it by -1
			}
		} else if (splitMulDiv(parts[i]).length > 1 || parts[i].includes("^")) {
			//it is multiplication or division or exponents
			if (addOrSub[i] == "+") {
				vars.push(multiplyDivide(parts[i])); //handle multiplication and division and exponents
			} else {
				vars.push(multiplyDivide("-" + parts[i])); //handle multiplication and division and exponents for the negative
			}
		} else if (parts[i] == "") {
			//don't do anything if it is empty
		} else {
			//it is just a variable
			if (addOrSub[i] == "+") {
				vars.push(parts[i]);
			} else {
				vars.push("-" + parts[i]);
			}
		}
	}
	//returning the result...
	if (nums == 0) {
		//there are no numbers so just return the variables
		if (parts.length > 1 && original != vars.join("+")) {
			//only add a step if something changed
			addStep("Add", original + " = " + vars.join("+"));
		}
		return vars.join("+");
	} else {
		//there are some numbers so return the numbers and variables
		if (parts.length > 1 && original != vars.join("+")) {
			//only add a step if something changed
			addStep("Add", original + " = " + vars.join("+") + "+" + nums);
		}
		return vars.join("+") + "+" + nums;
	}
}

function multiplyDivide(equation) {
	var original = equation;
	var tempList = splitMulDiv(equation);
	var parts = tempList[0]; //split by multiplication and division
	var mulOrDiv = tempList[1]; //tells where is multiplication and where is division
	var justExponent = true; //if it is just exponents, don't add a step

	var rParts = [{
		vars: [],
		nums: 1
	}];
	for (var i = 0; i < parts.length; i++) {
		if (!isNaN(parts[i])) {
			justExponent = false;
			//multiplies by mulBy later on.
			if (mulOrDiv[i] == "*") {
				var mulBy = parts[i];
			} else if (mulOrDiv[i] == "/") {
				var mulBy = 1 / parts[i];
			}
			//multiply each one by the num
			for (var j = 0; j < rParts.length; j++) {
				rParts[j].nums = percise(rParts[j].nums * mulBy);
			}
		} else {
			if (splitExp(parts[i]).length > 1) {
				//exponent
				parts[i] = "(" + exponent(parts[i]) + ")"; //see the exponent function
			}
			if (isParenth(parts[i])) {
				justExponent = false;
				var nextPart = simplify(parts[i].slice(1, -1));
				var addOrSub = splitAddSub(nextPart)[1];
				nextPart = splitAddSub(nextPart)[0]; //the add/sub parts of this equation

				var newRParts = [];
				for (var j = 0; j < rParts.length; j++) {
					for (var k = 0; k < nextPart.length; k++) {
						//multiply each part of the previous equation
						var toAdd = {
							vars: rParts[j].vars.slice(), //new list from this so when this changes, the original won't change.
							nums: rParts[j].nums
						};
						if (!isNaN(nextPart[k])) {
							//it is a number so multiply/divide by it
							if (addOrSub[k] == "+") {
								toAdd.nums = percise(toAdd.nums * nextPart[k]);
							} else {
								toAdd.nums = percise(toAdd.nums * -1 * nextPart[k]);
							}
						} else {
							//it is a variable
							if (addOrSub[k] == "-") {
								toAdd.nums *= -1;
							}
							toAdd.vars.push(nextPart[k]);
						}
						newRParts.push(toAdd);
					}
				}
				rParts = newRParts;
			} else {
				justExponent = false;
				//it is a variable
				for (var j = 0; j < rParts.length; j++) {
					rParts[j].vars.push(parts[i]);
				}
			}
		}
	}
	var toR = []; //the result to return
	for (var i = 0; i < rParts.length; i++) {
		if (rParts[i].nums == 1 && rParts[i].vars.length == 0) {
			toR.push("1");
		} else if (rParts[i].nums == 1) {
			//don't include the number if it is 1
			toR.push(rParts[i].vars.join(""));
		} else if (rParts[i].nums == 0) {
			//don't do anything!
		} else if (rParts[i].vars.length == 0) {
			//if no variables
			toR.push(rParts[i].nums);
		} else {
			//there is a variable and a number.
			toR.push(rParts[i].nums + "*" + rParts[i].vars.join(""));
		}
	}
	if (original != toR.join("+") && !justExponent) {
		addStep("Multiply", original + " = " + toR.join("+"));
	}
	return toR.join("+");
}

function exponent(equation) {
	var isNeg = false;
	if (equation[0] == "-") {
		equation = equation.slice(1);
		isNeg = true;
	}
	var parts = splitExp(equation); //split by "^" (it is a list)
	var i = parts.length - 1; //i starts at the end
	while (i > 0) { //repeat as long as it isn't the first in the list of parts
		var simplified = simplify(parts[i]);
		if (!isNaN(simplified) && simplified % 1 == 0) { //it is a whole number
			parts[i] = simplified;
			parts[i - 1] = [parts[i - 1]]; //turn previous one into a list
			for (var j = 1; j < parts[i]; j++) {
				parts[i - 1].push(parts[i - 1][0]); //add this many times
			}
			parts[i - 1] = parts[i - 1].join("*"); //join by multiplication
			parts[i - 1] = simplify(parts[i - 1]); //multiply it out
			parts.pop(); //remove the exponent part
		} else {
			parts[i - 1] = "(" + parts[i - 1] + "^" + parts[i] + ")";
			parts.pop();
		}
		i--;
	}
	if (isNeg) {
		return "-" + parts[i];
	}
	return parts[0];
}

//check if an equation part is all in parentheses
function isParenth(equation) {
	var toR = equation.length > 1; //the thing to return. if it is just one char long, then it is false.
	var i = 0;
	var inParen = 0;
	while (i < equation.length - 1) {
		if (equation[i] == "(") {
			inParen++;
		} else if (equation[i] == ")") {
			inParen--;
		}
		if (inParen == 0) {
			toR = false;
		}
		i++;
	}
	return toR;
}

function splitMulDiv(equation) {
	var parts = []; //will store it split by multiplication and division
	var i = 0;
	var inParen = 0;
	var mulOrDiv = ["*"]; //which are multiplication and which are division
	while (i < equation.length) {
		if (equation[i] == "(") {
			inParen++;
		} else if (equation[i] == ")") {
			inParen--;
		}

		if (inParen == 0) { //if not in parentheses
			if (equation[i] == "*" && i != 0) { //it is multiplication and there is something to the right and left of it
				parts.push(equation.slice(0, i)); //add a part
				mulOrDiv.push("*");
				equation = equation.slice(i + 1);
				i = 0;
			} else if (equation[i] == "/" && i != 0) { //it is division and there is something to the right and left of it
				parts.push(equation.slice(0, i)); //add a part
				mulOrDiv.push("/");
				equation = equation.slice(i + 1);
				i = 0;
			} else if (isVarOrNum(equation[i]) && isVarOrNum(equation[i + 1]) && equation[i + 1] != undefined) {
				if (isVar(equation[i]) || isVar(equation[i + 1])) {
					//it is multiplication of two variables/parentheses
					parts.push(equation.slice(0, i + 1));
					mulOrDiv.push("*");
					equation = equation.slice(i + 1);
					i = 0;
				} else {
					i++;
				}
			} else {
				i++;
			}
		} else {
			i++;
		}
	}
	parts.push(equation); //add the part of the equation left over.
	return [parts, mulOrDiv];
}

function splitAddSub(equation) {
	var parts = [];
	var addOrSub = ["+"]; //which parts are added and which are subtracted
	var i = 0;
	var inParen = 0;
	while (i < equation.length) {
		if (equation[i] == "(") {
			inParen++;
		} else if (equation[i] == ")") {
			inParen--;
		}
		if (inParen == 0) {
			if (equation[i] == "+" && equation[i + 1] != "-") { //it is _+_
				parts.push(equation.slice(0, i));
				equation = equation.slice(i + 1);
				i = 0;
				addOrSub.push("+");
			} else if (equation[i] == "+" && equation[i + 1] == "-") { //it is _+-_
				equation = equation.slice(0, i) + equation.slice(i + 1);
			} else if (equation[i] == "-" && equation[i - 1] != "*") { //it is _-_, but not _*-_
				if (equation.slice(0, i) == "") {
					addOrSub.pop();
					addOrSub.push("-");
				} else {
					parts.push(equation.slice(0, i));
					addOrSub.push("-");
				}
				equation = equation.slice(i + 1);
				i = 0;
			} else {
				i++;
			}
		} else {
			i++;
		}
	}
	parts.push(equation); //add whatever is left to the list.
	return [parts, addOrSub];
}

function splitExp(equation) {
	var parts = [];
	var addOrSub = ["+"];
	var i = 0;
	var inParen = 0;
	while (i < equation.length) {
		if (equation[i] == "(") {
			inParen++;
		} else if (equation[i] == ")") {
			inParen--;
		}
		if (inParen == 0) {
			if (equation[i] == "^") {
				//it is an exponent so add it
				parts.push(equation.slice(0, i));
				equation = equation.slice(i + 1);
				i = 0;
			} else {
				i++;
			}
		} else {
			i++;
		}
	}
	parts.push(equation); //add whatever is left to the list.
	return parts;
}

function addStep(type, text) {
	steps.push([type, text]);
}

function isVar(x) {
	return "abcdefghijklmnopqrstuvwxyz()".includes(x);
}

function isVarOrNum(x) {
	return "abcdefghijklmnopqrstuvwxyz1234567890()".includes(x);
}

function percise(x, numDigs = 8) {
	return Math.round(x * 10 ** numDigs + Number.EPSILON) / 10 ** numDigs;
}