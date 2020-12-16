/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. SI
2-Suma de los positivos. SI
3-Cantidad de positivos. SI
4-Cantidad de negativos. SI
5-Cantidad de ceros. SI
6-Cantidad de números pares. NO SE
7-Promedio de positivos. SI
8-Promedios de negativos. SI
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let vRt = "no";
	let vNIngresado;
	let vContadorN = 0;
	let vAcuN = 0;
	let vProN = 0;
	let vContadorP = 0;
	let vAcuP = 0;
	let vProP = 0;
	let vContador0 = 0;
	let vContadorPAR = 0;
	let vDifPN = 0;

	do {
		vNIngresado = parseInt(prompt("Ingresar numero : "));
		if (vNIngresado == 0) {
			vContador0++;
		}
		else if (vNIngresado < 0) {
			vContadorN++;
			vAcuN = vNIngresado + vAcuN;
			vProN = vAcuN / vContadorN;
		}
		else if (vNIngresado > 0) {
			vContadorP++;
			vAcuP = vNIngresado + vAcuP;
			vProP = vAcuP / vContadorP;
		}
		if (vNIngresado % 2 == 0) {
			vContadorPAR++;
		}

		vDifPN = vAcuP + (vAcuN);
		vRt = prompt("Desea continuar?si/no").toLowerCase()
	} while (vRt == "si") //fin del while		

	document.write("La suma de numeros negativos es : " + vAcuN + "<br>");
	document.write("La suma de los positivos es : " + vAcuP + "<br>");
	document.write("La cantidad de numeros positivos es : " + vContadorP + "<br>");
	document.write("La cantidad de numeros negativos es : " + vContadorN + "<br>");
	document.write("El promedio de los positivos es : " + vProP.toFixed(2) + "<br>");
	document.write("El promedio de los negativos es : " + vProN.toFixed(2) + "<br>");
	document.write("La cantidad de ceros es : " + vContador0 + "<br>");
	document.write("La cantidad de numeros pares ingresados es : " + vContadorPAR + "<br>");
	document.write("La diferencia entre positivos y negativos es : " + vDifPN + "<br>");
}//FIN DE LA FUNCIÓN