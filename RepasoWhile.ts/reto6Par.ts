function par(valor:number[]):string
 {
    let i=0
    while (i<valor.length)
    {  
      if (valor[i] % 2 ==0)
          {
            return "Si, el numero par existe"
          }
            i++;
    }
 }

//Main

let numeros=[23,7,9,6]
console.log(par(numeros))


 