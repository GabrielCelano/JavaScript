/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let vContador = 0;
	let vAcumulador = 0;
	let vNIngresado = 0;
	let vRespuesta = "no";
	
	do
	{
	 vNIngresado = parseInt(prompt("Ingresar numero: "));
	 vAcumulador = vAcumulador + vNIngresado;
	 vContador++;
	 vRespuesta = prompt("Quiere seguir ingresando numeros? si/no ").toLowerCase();
	}while(vRespuesta == "si")
	
	document.getElementById("txtIdSuma").value = vAcumulador;
	document.getElementById("txtIdPromedio").value = vAcumulador / vContador;

}//FIN DE LA FUNCIÓN