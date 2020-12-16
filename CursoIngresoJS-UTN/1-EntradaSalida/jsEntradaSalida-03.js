/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let vNombre;
	// document.getElementById("txtIdNombre").value; funciona siempre en todos los navegadores.
	vNombre = document.getElementById("Jose").value; // Accedo al valor del "txtIdNombre", que es la caja de texto que tengo en html.
	alert(vNombre);
	
	/*var nombreIngresado;
	nombreIngresado=txtI.dNombre.value;
	alert(nombreIngresado);*/ //si lo hago asi, puede que en otro navegador no funcione.

}


