function revertir(valor:string[]):string[]
 {
    let miArray: string[] = []

    
    for (let i = valor.length-1; i >= 0; i--) 
    {
         miArray.push(valor[i])
         
    }
    return miArray
}
 //Main 

    
    
    console.log(revertir(["hola", "que", "tal"]))
    