/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let vNSecreto; 
let vContador = 0;
let vNIngresado;

function comenzar()
{
  vNSecreto = Math.round(Math.random() * (100 - 1) + 1); //Genero el número RANDOM entre 1 y 100
}

function verificar()
{
  vContador++;
  document.getElementById("txtIdIntentos").value = vContador;

  vNIngresado = parseInt(document.getElementById("txtIdNumero").value);
  if(vNIngresado == vNSecreto)
  {
    alert("Usted es un ganador!!! y en solo "+vContador+" intentos.");
  }
  else if(vNIngresado < vNSecreto)
  {
    alert("Falta para llegar al numero secreto.");
  }
  else
  {
    alert("Se paso del numero secreto");
  }

}