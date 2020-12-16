/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let vNSecreto;
let vContador = 0;
let vNIngresado;

function comenzar() 
{
	vContador = 0;
	document.getElementById("txtIdIntentos").value = vContador;
	vNSecreto = Math.round(Math.random() * (100 * 1) + 1);  //Genero el número RANDOM entre 1 y 100
}

function verificar() 
{
	vContador++;
	document.getElementById("txtIdIntentos").value = vContador;
	vNIngresado = document.getElementById("txtIdNumero").value;
	if (vNIngresado == vNSecreto) 
	{
		switch (vContador) 
		{
			case 1:
				alert("Usted es de Psiquico");
				break;
			case 2:
				alert("Excelente percepcion");
				break;
			case 3:
				alert("Esto es suerte");
				break;
			case 4:
				alert("Excelente tecnica");
				break;
			case 5:
				alert("Ustede esta en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Falta tecnica");
				break;
			default:
				alert("Afortunado en el amor!!");
				break;

		}
		
	}

}
