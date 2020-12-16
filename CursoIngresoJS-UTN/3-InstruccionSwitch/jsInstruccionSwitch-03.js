function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes no tienes mas de 29 dias.");
			break;
        default:
			alert("Este mes tiene 30 o más días");
			break;

	}
	


}//FIN DE LA FUNCIÓN