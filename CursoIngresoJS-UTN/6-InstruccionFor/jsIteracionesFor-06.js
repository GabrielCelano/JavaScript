function mostrar() {
	let vContador = 0;
	let = vNum = parseInt(prompt("Ingresar un numero: "));
	for (i = 1; i < vNum; i++) {
		if (i % 2 == 0) {
			document.write("El numero " + i + " es par"+"<br>");
			vContador++;
		}
	}
	document.write("Se encontraron "+vContador+" numeros pares"+"<br>");
}//FIN DE LA FUNCIÓN