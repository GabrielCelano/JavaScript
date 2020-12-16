/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	let vNombre; let vEdad;
	vNombre = document.getElementById("txtIdNombre").value;
	vEdad = document.getElementById("txtIdEdad").value;

	//alert("Usted se llama "+vNombre+" y tiene "+vEdad+" años"); 

	alert(`Usted se llama ${vNombre} y tiene ${vEdad}`); // Mas parecido a lo que seria en C
}

