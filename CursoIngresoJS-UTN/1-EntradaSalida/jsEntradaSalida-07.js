/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	// Asigno las variables
	let vN1; let vN2; let resultado;

	//Convierto en numero entero los datos en el text box y los guardo en una variable
    vN1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vN2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//Sumo los datos y los guardo en una variable
	resultado = vN1 + vN2;

	//Muestro el resultado
	alert("La suma es: "+resultado);	
}

function restar()
{
	let vN1; let vN2; let resultado;

	vN1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vN2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = vN1 - vN2;
	alert("El resto es "+resultado);	
}

function multiplicar()
{ 
	let vN1; let vN2; let resultado;

	vN1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vN2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = vN1 * vN2;
	alert("La multiplicacion da: "+resultado);	
}

function dividir()
{
	let vN1; let vN2; let resultado;
	
	//Se utiliza el parseFloat para tomar los numero con ","
	vN1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	vN2 = parseFloat(document.getElementById("txtIdNumeroDos").value);

	resultado = vN1 / vN2;
	alert("La division da como resultado: "+resultado.toFixed(2));	
}

