function mostrar()
{

let vBariloche; let vCataratas; let vMardelplata; let vCordoba;
let vEstacion = document.getElementById("txtIdEstacion").value;
let vDestino = document.getElementById("txtIdDestino").value;

	switch(vEstacion)
{
	case "Invierno":
		vBariloche = "Se viaja";
		vCataratas = "No se viaja";
		vMardelplata = "No se viaja";
		vCordoba = "No se viaja";
		break;
	case "Verano":
		vBariloche = "No se viaja";
		vCataratas = "Se viaja";
		vMardelplata = "Se viaja";
		vCordoba = "No se viaja";
		break;
	case "Primavera":
		vBariloche = "No se viaja";
		vCataratas = "Se viaja";
		vMardelplata = "Se viaja";
		vCordoba = "Se viaja";
	case "Otoño":
		vBariloche = "Se viaja";
		vCataratas = "Se viaja";
		vMardelplata = "Se viaja";
		vCordoba = "Se viaja";
		break;
	
}


switch(vDestino)
{
	case "Bariloche":
		alert(vBariloche);
		break;
	case "Cataratas":
		alert(vCataratas);
		break;
	case "Mar del plata":
		alert(vMardelplata);
		break;
	case "Cordoba":
		alert(vCordoba);
		break;
	default:
		alert("Esta ciudad no esta asignada");
}

}//FIN DE LA FUNCIÓN