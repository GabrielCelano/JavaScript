/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 //Asigno las variables 
 let L; let A; let AA; const hilos = 3; let alambre;

 // Guardo los datos ingresados en los textbox en las variables 
 L = parseFloat(document.getElementById("txtIdLargo").value);
 A = parseFloat(document.getElementById("txtIdAncho").value);

 // Realizo la operacion de Base * Altura y me da el area y la guardo en una variable (AA)
 AA = L * A;
 
 // Realizo la operacion de Area * Hilos y me da la cantidad de alambre a comprar, la guardo en una variable (alambre)
 alambre = AA * hilos;

 // Muestro con un alert la cantidad de alambre a comprar
 alert("Cantidad de alambre a comprar: "+alambre.toFixed(2)+"m.");

}
function Circulo () 
{

 let R; let AA; let alambre; const pi = 3.14; const hilos = 3;

 R = parseFloat(document.getElementById("txtIdRadio").value);

 // Hago (radio^2) * pi, y lo guardo en la variable (AA)
 AA = (R*R) * pi;

 // Multiplico AA * hilos y lo guardo en una variable (alambre)
 alambre = AA * hilos;

 alert("Cantidad de alambre a comprar: "+alambre.toFixed(2)+"m.");

}
function Materiales () 
{
    let L; let A; let bcem; let bcal; const cem = 2; const cal = 3;

    L = parseFloat(document.getElementById("txtIdLargo").value);
    A = parseFloat(document.getElementById("txtIdAncho").value);

    // Multiplico L*A para averiguar el Area y multiplico el Area tanto por la variable "cem" como "cal" por separado, y las guardo en las variables bcem(cem) y bcal(cal)
    bcem = (L*A) * cem;

    bcal = (L*A) * cal;

    alert("Se necesitan "+bcem+" de cemento y "+bcal+" bolsas de cal.")

}