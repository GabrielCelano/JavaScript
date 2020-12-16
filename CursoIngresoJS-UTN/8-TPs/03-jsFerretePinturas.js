/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    // Asigno las variables
    let F; let C; 

    // Guardo lo ingresado al textbox en una variable (F o C)
    F = parseFloat(document.getElementById("txtIdTemperatura").value);

    // Realizo la conversion
    C = (F - 32) / 1.8;

    // Muestro con un alert la conversion
    alert("º"+F.toFixed(2)+" fahrenheit son º"+C.toFixed(2)+" centígrados");
}

function CentigradosFahrenheit () 
{
    let F; let C; 
    
    C = parseFloat(document.getElementById("txtIdTemperatura").value);

    F = (C * 1.8) + 32;

    alert("º"+C.toFixed(2)+"centígrados son º"+F.toFixed(2)+" fahrenheit");
}
