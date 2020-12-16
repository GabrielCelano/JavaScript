function mostrar()
{
	let vDestino = document.getElementById("txtIdDestino").value;

	switch(vDestino)
	{
		case "Ushuaia":
		case "Bariloche":
			alert("En este destino hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("En este destino hace calor");
			break;
		default: 
			alert("Esta provincia no esta asignada");
			break;
	}

}//FIN DE LA FUNCIÓN*/