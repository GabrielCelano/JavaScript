/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    // Asigno las varibles
    let pro1; let pro2; let pro3; let suma;

    // Guardar los datos ingresados en los textbox en las variables (pro1,pro2,pro3)
    pro1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    pro2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    pro3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    // Realizar la suma de productos y la guardo en una variable (suma)
    suma = pro1 + pro2 + pro3;

    // Mostrar en el alert el resultado de la suma de los precios
    alert("La suma total de los precios es de: "+suma.toFixed(2));
}
function Promedio () 
{
    let pro1; let pro2; let pro3; let sumval; let prom; const cantv = 3;
    
    pro1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    pro2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    pro3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumval = pro1 + pro2 + pro3;
    
    // Realizo la division de la suma de todos los productos(sumval) por el promedio de los mismos(cantv)
    prom = sumval / cantv;

    alert("El promedio de los tres productos es de: "+prom.toFixed(2));
}
function PrecioFinal () 
{
	let pro1; let pro2; let pro3; let suma; const iva = 1.21;

    pro1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    pro2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    pro3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    // Realizo la suma de los productos y multiplico el resultado por el iva
    suma = (pro1 + pro2 + pro3) * iva;

    alert("El precio final de los productos es de: "+suma.toFixed(2));
}