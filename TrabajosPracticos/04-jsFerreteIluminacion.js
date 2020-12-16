/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
        let vPrecioL = 35; let vCantidadL; let vMarca; let vPrecioFin; let vDescuento; let vImporte; let vPrecioFinDescuento; let vIngBruto = 0.10;  let vIIBB;
        vCantidadL = parseInt(document.getElementById("txtIdCantidad").value);
        vMarca = document.getElementById("Marca").value;

        switch(vMarca)
        {
          case 1:
          case 2:
          break;
          case 3:
            if (vMarca == "ArgentinaLuz")
            {
              vDescuento = 0.15;
            }
            else if (vMarca == "FelipeLamparas")
            {
              vDescuento = 0.10;
            }
            else
            {
              vDescuento = 0.05;
            }
            break;
          case 4:
            if (vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas")
            {
              vDescuento = 0.25;
            }
            else
            {
              vDescuento = 0.20;
            }
            break;
          case 5:
            if(vMarca == "ArgentinaLuz")
            {
              vDescuento = 0.40;
            }

            else
            {
              vDescuento = 0.30;
            }
            break;
          default:
              vDescuento = 0.50;
              break;
        }

        vImporte = vCantidadL * vPrecioL;

        vPrecioFin = vImporte - vImporte * vDescuento;

        document.getElementById("txtIdprecioDescuento").value = vPrecioFin;
         
          if (vPrecioFin >= 120)
        {
          vIIBB = vPrecioFin * vIngBruto;

          alert("”IIBB Usted pago: $"+vPrecioFin+" ”, siendo: $"+vIIBB+" el impuesto que se pagó.");
        }

       


}
