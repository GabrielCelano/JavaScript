	function mostrar() {
		let vCantidad = 0;
		do{
		let = vNum = parseInt(prompt("Ingresar un numero: "));
		}while(vNum <= 1 || isNaN(vNum))
		for (let i = 1; i <= vNum; i++) {
			if (vNum % i == 0) {
				vCantidad++;
			}
		}
		if(vCantidad == 2){
			alert(vNum+" es primo");
		}
		else{
			alert(vNum+" no es primo");
		}
	}//FIN DE LA FUNCIÓN