/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let vContador = 0;
	let vAcumuladorP = 0;
	let vAcumuladorN = 1;
	let vNIngresado = 0;
	let vRespuesta = "no";
	
	do
	{
	 vNIngresado = parseInt(prompt("Ingresar numero: "));
	 vContador++;
	 if (vNIngresado >= 0)
	 {
		 vAcumuladorP = vAcumuladorP + vNIngresado;
	 }
	 else if(vNIngresado < 0)
	 {
		vAcumuladorN = vAcumuladorN * vNIngresado;
	 }
	 vRespuesta = prompt("Quiere seguir ingresando numeros? si/no ").toLowerCase();
	}while(vRespuesta == "si")
	
	document.getElementById("txtIdSuma").value = vAcumuladorP;
	document.getElementById("txtIdProducto").value = vAcumuladorN;

}//FIN DE LA FUNCIÓN