/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{   
	//Asigno variables
	let sueldo; let resul; const aumento = 1.10;
	
	//Guardo el string del textbox en la variable "sueldo"
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	//Realizo la operacion y la guardo en la variable "resul"
	resul = sueldo * aumento;
	
	//Mostrar en el textbox el resultado
	document.getElementById("txtIdResultado").value = resul;

}
