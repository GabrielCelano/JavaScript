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
        let vPrecioL = 35; let vCantidadL; let vMarca;

        vCantidadL = parseInt(document.getElementById("txtIdCantidad").value);
        vMarca = document.getElementById("Marca").value;

        if (vCantidadL <=2)
        {
          let vPrecioFin; 

          vPrecioFin = vPrecioL * vCantidadL;

          document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);

        }

        // A
        if (vCantidadL >= 6)
        {

          let vDesc = 0.50; let vPrecioFin; let vImporte;

          vImporte = vPrecioL * vCantidadL;

          vPrecioFin = vImporte - vImporte * vDesc;
        
          
            if(vPrecioFin >= 120)
          {
            let vPreciImpuesto;  let vIngBruto = 0.10; let vPFinImp;

            vPrecioImpuesto = vPrecioFin;

            vPFinImp = vPrecioImpuesto * vIngBruto;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);

            alert("Usted pago: "+vPFinImp+" de IIBB");
          }

          document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin); 

        }
    




        // B
        if (vCantidadL == 5 && vMarca == "ArgentinaLuz")
        {
            let vDescAL = 0.40; let vImporte; let vPrecioFin;

            vImporte = vPrecioL * vCantidadL;

            vPrecioFin = vImporte - vImporte * vDescAL;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);
        }

        else if (vCantidadL == 5 && vMarca != "ArgentinaLuz")
        {
            let vImporte; let vPrecioFin;

            vImporte = vPrecioL * vCantidadL;

            vPrecioFin = vImporte - vImporte * 0.30;

            if(vPrecioFin >= 120)
          {
            let vPreciImpuesto;  let vIngBruto = 0.10; let vPFinImp;

            vPrecioImpuesto = vPrecioFin;

            vPFinImp = vPrecioImpuesto * vIngBruto;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);

            alert("Usted pago: "+vPFinImp+" de IIBB");
          }
            

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);
        }
  




        //C
        if (vCantidadL == 4 && vMarca == "ArgentinaLuz")
        {
            let vImporte; let vPrecioFin;

            vImporte = vPrecioL * vCantidadL;

            vPrecioFin = vImporte - vImporte * 0.25;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);
        }

        else if(vCantidadL == 4 && vMarca == "FelipeLamparas")
        {
            let vImporte; let vPrecioFin;

            vImporte = vPrecioL * vCantidadL;

            vPrecioFin = vImporte - vImporte * 0.25;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);
        } 

        else if (vCantidadL == 4)
        {
            let vImporte; let vPrecioFin;

            vImporte = vPrecioL * vCantidadL;

            vPrecioFin = vImporte - vImporte * 0.20;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);
        }





        // D
        if (vCantidadL == 3 && vMarca == "ArgentinaLuz")
        {
            let vImporte; let vPrecioFin;

            vImporte = vPrecioL * vCantidadL;

            vPrecioFin = vImporte - vImporte * 0.15;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);
        }

        else if(vCantidadL == 3 && vMarca == "FelipeLamparas")
        {
            let vImporte; let vPrecioFin;

            vImporte = vPrecioL * vCantidadL;

            vPrecioFin = vImporte - vImporte * 0.10;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);
        } 

        else if (vCantidadL == 3)
        {
            let vImporte; let vPrecioFin;

            vImporte = vPrecioL * vCantidadL;

            vPrecioFin = vImporte - vImporte * 0.05;

            document.getElementById("txtIdprecioDescuento").value = ("$ "+vPrecioFin);
        }

    

     
}
