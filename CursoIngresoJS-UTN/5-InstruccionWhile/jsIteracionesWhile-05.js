/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let vSexo;
	do
	{
	vSexo = prompt("Ingrese sexo.").toLowerCase();
	}while(!(vSexo == "f" || vSexo == "m"));
    document.getElementById("txtIdSexo").value = ("El sexo es: "+vSexo);
}//FIN DE LA FUNCIÓN