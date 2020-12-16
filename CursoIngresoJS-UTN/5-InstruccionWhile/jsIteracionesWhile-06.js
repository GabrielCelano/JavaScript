function mostrar()
{
	let vContador = 0;
	let vAcumulador = 0;
	let vNIngresado = 0;
    while(vContador < 5)
	{
	 vNIngresado = parseInt(prompt("Ingresar numero: "));
	 vAcumulador = vAcumulador + vNIngresado;
	 vContador++;
	}
	
	document.getElementById("txtIdSuma").value = vAcumulador;
	document.getElementById("txtIdPromedio").value = vAcumulador / vContador;
}//FIN DE LA FUNCIÓN