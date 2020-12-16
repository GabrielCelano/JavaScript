/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Asigno variables
	let importe; let resul; const descuento = 0.25;
	
	//Guardo el string del textbox en la variable "importe"
	importe = parseInt(document.getElementById("txtIdImporte").value);
	
	//Realizo la operacion y la guardo en la variable "resul"
	resul = importe - importe * descuento;
	
	//Mostrar en el textbox el resultado
	document.getElementById("txtIdResultado").value = resul;
}
