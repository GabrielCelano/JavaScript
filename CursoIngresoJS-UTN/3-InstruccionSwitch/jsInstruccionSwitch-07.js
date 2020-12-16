function mostrar()
{
	let vDestino = document.getElementById("txtIdDestino").value;

	switch(vDestino)
	{
		case "Ushuaia":
			alert("Se encuentra en el Sur");
			break;
		case "Bariloche":
			alert("Se encuentra en el Oeste");
			break;
		case "Cataratas":
			alert("Se encuentra en el Norte");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Este");
			break;
	}
	

}//FIN DE LA FUNCIÓN