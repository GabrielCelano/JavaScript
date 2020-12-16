/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let vRt = "no";
	let vSexoT;
	let vLugar;
	let vTemp;
	let vCantP;
	let vContB = 0;
	let vContC = 0;
	let vContS = 0;
	let vLugarFav;
	let tFlag = 0;
	let vTituAcu;
	let vAcuP = 0;
	let vAcuI = 0;
	let vPromedio = "Nadie viaja en invierno";
	let vContadorI = 0;

	do {
		do {
			vSexoT = prompt("Ingresar sexo del titular(f/m): ").toLowerCase();
		} while (!(vSexoT == "f" || vSexoT == "m"))
		do {
			vLugar = prompt("Ingresar lugar(“bariloche”, “cataratas” o “salta”): ").toLowerCase();
		} while (!(vLugar == "bariloche" || vLugar == "cataratas" || vLugar == "salta"))
		do {
			vTemp = prompt("Ingresar temporada deseada(“otoño”,”invierno, “verano,”primavera”): ").toLowerCase();
		} while (!(vTemp == "otoño" || vTemp == "invierno" || vTemp == "verano" || vTemp == "primavera"))
		do {
			vCantP = parseInt(prompt("Ingresar cantidad de personas que viajan: "));
		} while (isNaN(vCantP) || vCantP < 1)

		if (tFlag == 0) { //B
			tFlag = 1;
			vTituAcu = vSexoT;
			vAcuP = vCantP;
		}
		else if (tFlag == 1 && vCantP > vAcuP) {
			vAcuP = vCantP;
			vTituAcu = vSexoT;
		}

		switch (vTemp) {
			case "invierno":
				vAcuI = vAcuI + vCantP;
				vContadorI++;
				break;
		}

		switch (vLugar) { //A
			case "bariloche":
				vContB++;
				break;
			case "cataratas":
				vContC++;
				break;
			case "salta":
				vContS++;
				break;
		}

		vRt = prompt("Quiere seguir ingreando datos? (si/no): ").toLowerCase();
	} while (vRt == "si")

	vPromedio = vAcuI / vContadorI;

	if (vContB > vContC && vContB > vContS) {
		vLugarFav = "Bariloche";
	}
	else if (vContC > vContB && vContC > vContS) {
		vLugarFav = "Cataratas";
	}
	else if (vContS > vContC && vContS > vContB) {
		vLugarFav = "Salta";
	}


	document.write("El lugar más elegido: " + vLugarFav + "<br>"); //A
	document.write("El nombre de titular que lleva más pasajeros: " + vTituAcu + "<br>"); //B
	document.write("El promedio de personas por viaje,  que viajan en invierno :" + vPromedio + "<br>"); //C
}
