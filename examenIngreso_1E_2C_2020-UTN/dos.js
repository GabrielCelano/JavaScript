/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let vPro;
  let vMarca;
  let vPrecio;
  let vPeso;
  let vTipo;
  let vRt = "no";
  let vAcuP = 0;
  let sFlag = 0;
  let vAcuPS = 0;
  let vAcuMS = 0;
  let lFlag = 0;
  let vAcuPL = 0;
  let vAcuML = 0;



  do {

    do {
      vMarca = prompt("Ingresar marca: ");
    } while (!(isNaN(vMarca)))
    do {
      vPrecio = parseFloat(prompt("Ingresar precio: "));
    } while (isNaN(vPrecio) || vPrecio < 1)
    do {
      vPeso = parseFloat(prompt("Ingresar peso (KG): "));
    } while (isNaN(vPeso) || vPeso < 1)
    do {
      vTipo = prompt("Ingresar tipo (solido o liquido): ").toLowerCase();
    } while (!(vTipo == "solido" || vTipo == "liquido"))

    vAcuP = vAcuP + vPeso;
    switch (vTipo) {
      case "solido":
        if (sFlag == 0) {
          sFlag = 1;
          vAcuPS = vPrecio;
          vAcuMS = vMarca;
        }
        else if (sFlag == 1 && vPrecio < vAcuPS) {
          vAcuPS = vPrecio;
          vAcuMS = vMarca;
        }
        break;
      case "liquido":
        if (lFlag == 0) {
          lFlag = 1;
          vAcuPL = vPrecio;
          vAcuML = vMarca;
        }
        else if (lFlag == 1 && vPrecio > vAcuPL) {
          vAcuPL = vPrecio;
          vAcuML = vMarca;
        }
        break;
    }

    vRt = prompt("Quiere seguir ingresando productos? (si/no): ").toLowerCase();
  } while (vRt == "si")

  document.write("Peso total de la compra: " + vAcuP.toFixed(2) + "kg<br>");//A
  document.write("La marca del más caro de los líquidos es: " + vAcuML + "<br>");//B
  document.write("La marca del más barato de los sólidos es: " + vAcuMS + "<br>");//C
}
