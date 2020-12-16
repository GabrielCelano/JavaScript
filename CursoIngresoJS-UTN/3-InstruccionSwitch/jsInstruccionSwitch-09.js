function mostrar()
{
	const vBase = 15000; let vDBariloche;  let vDCataratas; let vDMardelplata; let vDCordoba; let vPrecioFin;

	let vEstacion = document.getElementById("txtIdEstacion").value;
	let vDestino = document.getElementById("txtIdDestino").value;

		switch(vEstacion)
	{
		case "Invierno":
			vDBariloche = 120;
			vDCataratas = 90;
			vDCordoba = 90;
			vDMardelplata = 80;
			break;
		case "Verano":
			vDBariloche = 80;
			vDCataratas = 110;
			vDCordoba = 110;
			vDMardelplata = 120;
			break;
		case "Primavera":
		case "Otoño":
			vDBariloche = 110;
			vDCataratas = 110;
			vDMardelplata = 110;
			vDCordoba = 100;
			break;
		
	}
	
	switch(vDestino)
	{
		case "Bariloche":
			vPrecioFin = (vDBariloche * vBase) / 100;
			alert("El precio final es de: $ "+vPrecioFin);
			break;
		case "Cataratas":
			vPrecioFin = (vDCataratas * vBase) / 100;
			alert("El precio final es de: $ "+vPrecioFin);
			break;
		case "Mar del plata":
			vPrecioFin = (vDMardelplata * vBase) / 100;
			alert("El precio final es de: $ "+vPrecioFin);
			break;
		case "Cordoba":
			vPrecioFin = (vDCordoba * vBase) / 100;
			alert("El precio final es de: $ "+vPrecioFin);
			break;
	}
		


	

}