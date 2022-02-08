function imprimirContinente(pais:string):void
{
  let europa: string[] =["España", "Polonia", "Alemania", "Italia", "Holanda"]
  let africa:string[] = ["Marruecos", "Ghana", "Argelia", "Cabo Verde", "Camerún"]
  let asia:string [] =["China", "Filipinas", "Corea del Sur", "Corea del NOrte", "Japon"]
  let america:string[]= ["Peru", "Colombia", "Mexico", "Estados Unidos", "Canada"]
  let oceania:string[]=["Australia", "Nueva Zelanda", "Samoa", "Indonesia", "Tonga"]
  let antartida:string[] =["Kerguelen", "Islas Crozet" , "Isla Bouvet", "Islas Heart y Macdonald"]
  
  if (europa.includes(pais))
     {
     console.log("Europa")  
     }
  else if (africa.includes(pais)) 
     {
      console.log("Africa")  
     }
  else if (asia.includes(pais)) 
      {
       console.log("Asia")  
      }
  else if (america.includes(pais))
      {
       console.log("America")
      }
  else if (oceania.includes(pais)) 
      {
       console.log("Oceania")  
      }
  else if (antartida.includes(pais))
      {
       console.log("Antartida")
      }
  else
      {
       console.log("Error")  
      }

}



imprimirContinente("Polonia")

  
    
