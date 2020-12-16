/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() 
{	// declarar variables
	let vNIngresado = 0;
	let vContador = 0;
	let vNMax;
	let vNMin;
	let vRt = "no";
	//iniciar variables

	do {
		vContador++;
		vNIngresado = parseInt(prompt("Ingresar numero: "));

		if (vContador == 1) 
		{
			vNMax = vNIngresado;
			vNMin = vNIngresado;
		}

		else if (vContador > 1 && vNIngresado > vNMax) 
		{
			vNMax = vNIngresado;
		}

		else if (vContador > 1 && vNIngresado < vNMin) 
		{
			vNMin = vNIngresado;
		}
		vRt = prompt("Desea continuar? si/no").toLowerCase();
	} while (vRt == "si")

	document.getElementById("txtIdMaximo").value = vNMax;
	document.getElementById("txtIdMinimo").value = vNMin;

}/*FIN DE LA FUNCIÓN

        EJERCICIO SOLO CON WHILE
        vNIngresado = parseInt(prompt("Ingresar numero: "));
        vNMax = vNIngresado;
		vNMin = vNIngresado;
        vRt = prompt("Desea continuar? si/no").toLowerCase();

	while(vRt == "si")
	{
		vNIngresado = parseInt(prompt("Ingresar numero: "));

		 if (vNIngresado > vNMax) 
		{
			vNMax = vNIngresado;
		}

		else if (vNIngresado < vNMin) 
		{
			vNMin = vNIngresado;
		}
		vRt = prompt("Desea continuar? si/no").toLowerCase();
	} 

	document.getElementById("txtIdMaximo").value = vNMax;
	document.getElementById("txtIdMinimo").value = vNMin;
	
	EJERCICIO CON BANDERA
	
	function mostrar() 
{	// declarar variables
	let vNIngresado = 0;
	let vBandera = 1; ASIGNARLE 1
	let vNMax;
	let vNMin;
	let vRt = "no";
	//iniciar variables

	do {
		vContador++;
		vNIngresado = parseInt(prompt("Ingresar numero: "));

		if (vBandera == 1) 
		{
			vNMax = vNIngresado;
			vNMin = vNIngresado;
		}

		else if (vContador > 1 && vNIngresado > vNMax) 
		{
			vNMax = vNIngresado;
		}

		else if (vContador > 1 && vNIngresado < vNMin) 
		{
			vNMin = vNIngresado;
		}
		vRt = prompt("Desea continuar? si/no").toLowerCase();
	} while (vRt == "si")

	document.getElementById("txtIdMaximo").value = vNMax;
	document.getElementById("txtIdMinimo").value = vNMin;
	*/