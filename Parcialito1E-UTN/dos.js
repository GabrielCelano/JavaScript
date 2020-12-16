/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let vRt = "si";
	let vArt;
	let vArtL = "No se ha ingresado un articulo lacteo";
	let vArtAcu;
	let vCat;
	let vPrecio;
	let vPrecioMax;
	let vPrecioMaxL;
	let vBanderaL = 0;
	let vContadorB = 0;
	let vContador = 0;


	do {
		vArt = prompt("Ingresar nombre del articulo : ");
		vCat = prompt("Ingresar categoria del articulo (almacen, lácteos, limpieza o bebidas): ").toLowerCase();
		//if(vCat == "almacen" || vCat == "lacteos" || vCat == "limpieza" || vCat == "bebidas")
		vPrecio = parseInt(prompt("Ingresar precio del articulo : "));
		if (vPrecio >= 0 && vPrecio <= 1000) {
			vContador++;
			if (vCat == "bebidas") {
				vContadorB++;
			}
			if (vCat == "lacteos") {
				if (vBanderaL == 0) {
					vPrecioMaxL = vPrecio;
					vArtL = vArt;
					vBanderaL = 1;
				}
				if (vBanderaL == 1 && vPrecio > vPrecioMaxL) {
					vPrecioMaxL = vPrecio;
					vArtL = vArt;
				}
			} 
		    if(vContador == 1){
				vPrecioMax = vPrecio;
				vArtAcu = vArt;
			}
			else if (vContador > 1 && vPrecio > vPrecioMax) {
				vArtAcu = vArt;
			}
		}
		else {
			alert("Debe ingresar precios mayores a $0 y menores a $1000");
		}
		vRt = prompt("Desea seguir ingresando?(si/no)");
	} while (vRt == "si")
	document.write("El articulo de mayor precio es : " + vArtAcu + "<br>");
	document.write("El articulo de mayor precio de la categoria lacteos es : " + vArtL + "<br>");
	document.write("La cantidad de articulos ingresados de la categoria bebidas son : " + vContadorB + "<br>");

}

/*
let vArt;
	let vArtL;
	let vArtAcu;
	let vCat;
	let vPrecio;
	let vPrecioL;
	let vPrecioMax;
	let vBanderaL = 0;
	let vContador = 0;
	let vContadorB = 0;
	let vRt = "no";




	do {
		vContador++;
		vArt = prompt("Ingresar nombre del articulo : ");
		vCat = prompt("Ingresar categoria del articulo (almacen, lácteos, limpieza o bebidas): ");
		vPrecio = prompt("Ingresar precio del articulo : ");
		if (vCat == "bebidas") {
			vContadorB++;
		}
		if(vCat == "lacteos" && vBanderaL == 0){
			vPrecioL = vPrecio;
			vBanderaL = 1;
			vArtL = vArt;
		}
		else if(vCat == "lacteos" && vBanderaL == 1){
			vPrecioL = vPrecio;
			if(vPrecio > vPrecioL){
				vArtL = vArt;
			}
		}

		if(vContador == 1) {
			vPrecioMax = vPrecio;
		}
		else if (vContador > 1 && vPrecio > vPrecioMax) {
			vArtAcu = vArt;
		}


		vRt = prompt("Quiere seguir ingresando?si/no ").toLowerCase();
	} while (vRt == "si")

	document.write("El articulo de mayor precio es : " + vArtAcu + "<br>");
	document.write("El articulo de mayor precio de la categoria lacteos es : " + vArtL + "<br>");
	document.write("La cantidad de articulos ingresados de la categoria bebidas son : " + vContadorB + "<br>");
*/



/* do {
		vContador++;
		vArt = prompt("Ingresar nombre del articulo : ");
		vCat = prompt("Ingresar categoria(almacen, lácteos, limpieza o bebidas) : ");
		vPrecio = prompt("Ingresar precio del articulo : ");
		if (vCat == "bebidas") {
			vContadorB++;
		}
		if (vContador == 1) {
			vPrecioMax = vPrecio;
			vPrecioMin = vPrecio;
			vArtAcu = vArt;
		}
		else if (vCat == "lacteos") {
			vLacteo = vArt;
			vPrecioL = vPrecio;
			if (vPrecioL > vPrecio) {
				vLacteo = vArt;
			}
		} else if (vContador > 1 && vPrecio > vPrecioMax) {
			vArtAcu = vArt;
		}

		vRt = prompt("Desea continuar? si/no").toLowerCase();
	} while (vRt == "si")

	document.write("El articulo de mayor precio es : " + vArtAcu + "<br>");
	document.write
	document.write("La cantidad de articulos ingresados de la categoria bebidas es : " + vContadorB + "<br>");
} */