/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{   // Asigno las variables
	let vNendo; let vNsor; let resultado;

    //Convierto en numero entero los string de los textbox y los guardo en las variables
	vNendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	vNsor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

    //Divido los dos datos ingresados y los guardo en una misma variable
	resultado = vNendo % vNsor;
	
	//Muestro el resultado
	alert("El resto es: "+resultado);
}
