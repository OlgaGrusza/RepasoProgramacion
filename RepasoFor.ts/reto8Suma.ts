
export function sumaCaracteres(valor:string[]):number
{
    let resultado: number=0;
   

   for   (let i =0; i < valor.length; i++)
       {
              resultado = resultado + valor[i].length;
       }
    return resultado
}



 
//Main

// console.log(sumaCaracteres(["Programacion", "desde", "cero", "en", "Codentoch"]))