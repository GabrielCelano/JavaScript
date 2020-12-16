/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let vNom;
	let vPeso;
	let vSexo;
	let vEdad;
	let vCont = 0;
	let vContF = 0;
	let vAcuEdad = 0;
	let vContT = 0;
	let mFlag = 0;
	let vAcuPeso = 0;
	let vAcuNom = "No se ingresaron personas masculinas";
	let vPromedio = 0;

	for (let i = 0; i < 5; i++) {
		vCont++;
		do {
			vNom = prompt("Ingresar nombre N" + vCont + " :");
		} while (!(isNaN(vNom)))
		do {
			vPeso = parseInt(prompt("Ingresar peso: "));
		} while (isNaN(vPeso) || vPeso < 1)
		do {
			vSexo = prompt("Ingresar sexo (f/m):").toLowerCase();
		} while (!(vSexo == "f" || vSexo == "m"))
		do {
			vEdad = parseInt(prompt("Ingresar edad:"));
		} while (isNaN(vEdad) || vEdad < 1)

		vAcuEdad = vAcuEdad + vEdad;
		vContT++;

		switch (vSexo) {
			case "f":
				vContF++;
				break;
			case "m":
				if (mFlag == 0) {
					mFlag = 1;
					vAcuPeso = vPeso;
					vAcuNom = vNom;
				}
				else if (mFlag == 1 && vPeso > vAcuPeso) {
					vAcuPeso = vPeso;
					vAcuNom = vNom;
				}
				break;
		}

	}

	vPromedio = vAcuEdad / vContT;

	document.write("A) La cantidad de mujeres :" + vContF + "<br>");//A
	document.write("B) La edad promedio en total es: " + vPromedio + "<br>");//B
	document.write("C) El hombre mas pesado es " + vAcuNom + ", pesando :" + vAcuPeso + "kg<br>");//C
}
