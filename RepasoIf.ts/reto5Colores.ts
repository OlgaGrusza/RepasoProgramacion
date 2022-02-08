function imprimirArcoiris(valor: string[]):void
{
    let arcoiris: string[]=["rojo","naranja","amarillo","verde","cian","azul","violeta"]
    let i=0
    while (i<valor.length)
    {
      if (arcoiris.includes(valor[i]))
         {
         console.log("El color esta dentro de arcoiris");
         }
      else  
         {
         console.log("El color no esta dentro del arcoiris");
         }
     
      i++;
    }

} 
//main   
let misColores: string [] = ["rojo", "azul", "blanco"]

imprimirArcoiris(misColores)

