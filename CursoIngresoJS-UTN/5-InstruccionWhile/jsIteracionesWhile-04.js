/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let vNIngresado;
	do 
	{
	vNIngresado = parseInt(prompt("Ingrese el número clave."));
	}while(!(vNIngresado >= 0 && vNIngresado <= 9));

	document.getElementById("txtIdNumero").value = vNIngresado; 
	
}//FIN DE LA FUNCIÓN