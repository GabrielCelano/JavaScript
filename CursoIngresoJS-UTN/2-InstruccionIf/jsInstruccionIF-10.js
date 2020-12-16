function mostrar()
{
	let vNum;

	vNum = Math.round(Math.random() * (10 - 1) + 1);

	if (vNum >= 9)
	{
		alert(+vNum+": Excelente");
	}
	
	else if (vNum >= 4 && vNum <= 8)
	{
		alert(+vNum+": Aprobo");
	}

	else 
	{
		alert(+vNum+": Vamos la proxima se puede");
	}

}//FIN DE LA FUNCIÓN