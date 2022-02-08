function mVerdad(valor: string[])
{
     let resultado: boolean = true;
     
    for (let i = 0; i <valor.length; i++) 
    {
         if (valor[i].charAt(0)!="M")
         {
         resultado =false;
         }
        
    }
    return resultado
  
}
    

 //Main
    
    
    
    console.log(mVerdad(["Maria","Manolo","Oscar"]));
    console.log (mVerdad(["Maria", "Manolo","Margarita"]));
    console.log (mVerdad(["Olga", "marta"]));
   
