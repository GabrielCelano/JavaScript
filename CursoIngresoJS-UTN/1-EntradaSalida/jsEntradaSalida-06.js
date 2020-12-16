/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/* parseInt lo que hace es convertir en entero y lo devuelve a la variable dentro de los ()*/
	let vN1; let vN2; let vSuma;
	
    // Convierto en numeros enteros los strings asignados en las cajas de texto y los guardo en una variable
	vN1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vN2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	// Sumo los dos valores y los guardo en la variable "vSuma"
	vSuma =  vN1 + vN2;

    // Muestro la suma
	alert("El resultado es: "+vSuma);
}

