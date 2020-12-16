function mostrar() {
	let vCantidad = 0;
	let = vNum = parseInt(prompt("Ingresar un numero: "));
	for (let i = 0; i != vNum; i++) {
		if (vNum % i == 0) {
			vCantidad++;
			document.write(vNum + " es divisor de " + i + "<br>");
		}
	}
	document.write("Se encontraron " + vCantidad + " numeros divisores" + "<br>");
}//FIN DE LA FUNCIÓN