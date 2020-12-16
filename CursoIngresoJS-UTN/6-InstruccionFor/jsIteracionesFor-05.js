function mostrar()
{
	let vNum;
		for(let i=1; i<11; i++){
		document.write(i+"<br>");
		vNum = parseInt(prompt("Ingresar numero: "))
		alert("Se ingreso el numero : "+vNum)
		if(vNum==9){
			break;
		}
	}
}//FIN DE LA FUNCIÓN