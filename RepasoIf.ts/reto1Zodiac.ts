function zodiac(dia:number,mes:number):string
{ 
    let resultado:string 
        if ((dia > 19 && dia <32) && mes == 3 || (dia > 0 && dia <21) && mes == 4)
    {
        resultado = "Aries"
    }
    else if((dia >20 && dia <31) && mes == 4 || (dia >0 && dia < 22 ) && mes ==5)
    {
        resultado = "Tauro"
    }
    else if((dia > 21 && dia < 32) && mes == 5 || (dia > 0 && dia < 22) && mes == 6)
    {
        resultado =  "Géminis"
    }
    else if((dia > 21 && dia < 31) && mes == 6 || (dia > 0 && dia < 23) && mes == 7)
    {
        resultado = "Cáncer"
    }
    else if((dia > 22 && dia < 32) && mes == 7 || (dia > 0 && dia < 23) && mes == 8)
    {
        resultado = "Leo"
    }
    else if((dia >22 && dia < 32) && mes == 8 ||(dia > 0 && dia < 23) && mes == 9)
    {
        resultado =  "Virgo"
    }
    else if((dia > 22 && dia < 31) && mes == 9 || (dia > 0 && dia < 23) && mes ==10)
    {
        resultado =  "Libras"
    }
    else if((dia > 22 && dia < 32) && mes ==10 || (dia > 0 && dia < 23) && mes ==11)
    {
        resultado = "Escorpio"
    }
    else if((dia > 22 &&  dia < 31) && mes == 11 || (dia > 0 && dia < 22) && mes == 12)
    {
        resultado = "Sagitario"
    }
    else if ((dia > 21 && dia < 32) && mes == 12 || (dia > 0 && dia < 21) && mes == 1)
    {
        resultado = "Capricornio"
    }
    else if ((dia > 22 && dia < 32) && mes ==1 || (dia > 0 && dia < 19) && mes == 2)
    {
        resultado = "Acuario"
    }
    else if((dia > 20 && dia < 30) && mes ==2 || (dia > 0 && dia < 20) && mes == 3)
    {
        resultado = "Piscis"
    }
    else
    {
        resultado = "Fecha error"
    }

    return resultado
}


console.log(zodiac(21,11));

