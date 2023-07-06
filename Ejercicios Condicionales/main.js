//////////////////////////1.

// let num1 = prompt("Ingrese un número")
// let num2 = prompt("Ingrese un número")

// if(num1 > num2){
//     console.log("El primer número es mayor")
// }else{
//     console.log("El segundo número es mayor")
// }

///////////////////////// 2. 

// let num1 = prompt("Ingrese un número")
// let num2 = prompt("Ingrese un número")

// if(num1 == num2){
//     console.log("Los números son iguales")
// }else{
//     console.log("Los números son diferentes")
// }

///////////////////////3.

// let num1 = prompt("Ingrese un número")
// let num2 = prompt("Ingrese un número")

// if(num1 > num2){
//     console.log(`${num1} es mayor`)
// }
// if(num1 == num2){
//     console.log("Los números son iguales")
// }
// if(num2 > num1){
//     console.log(`${num2} es mayor`)   
// }

////////////////////4.

// let num1 = prompt("Ingrese un número")
// let num2 = prompt("Ingrese un número")
// let num3 = prompt("Ingrese un número")

// if(num1 <= num2 && num1 <= num3){
//     console.log(`${num1} es el mas chico`)

// } if(num2 < num1 && num2 < num3){
//     console.log(`${num2} es el mas chico`)

// }if(num3 < num2 && num3 < num1){
//     console.log(`${num3} es el mas chico`)

// }

////////////////////////5. 
// let persona1 = {
//     nombre: "Carlos",
//     edad: 23,
//     altura: 174
// }

// let persona2 = {
//     nombre: "Jose",
//     edad: 50,
//     altura: 170
// }

// if(persona1.edad > persona2.edad){
//     console.log(`${persona1.nombre} es mayor`)
// } else{
//     console.log(`${persona2.nombre} es mayor`)   
// }

// if(persona1.altura > persona2.altura){
//     console.log(`${persona1.nombre} es más alto`)
// }else{
//     console.log(`${persona1.nombre} es más alto`)
// }

////////////////6. 

// let nombre = prompt("Ingrese su nombre")
// let edad = prompt("Ingrese su edad")
// let altura = prompt("Ingrese su altura")
// let vision = prompt("Ingrese su vision")

// if(edad >= 18 && altura >= 150 && vision >= 8){
//     console.log("Si esta capacitado para conducir")
// }else{
//     console.log("No esta capacitado para conducir")
// }

///////////7.
// let nombre = prompt("Ingrese su nombre")
// let pase = prompt("Ingrese Pase")
// let entrada = prompt("¿Posee entrada?")

// if(nombre == "natalia" || pase == "VIP"){
//     console.log("Bienenido, puede pasar")
// }else if(entrada == "si" || entrada == "s" || entrada == true){
//     let usar = prompt("desea usar su entrada?")
//     if(usar == "si"){
//        console.log("Bienenido, puede pasar")        
//     } 
    
// }
// if (entrada == "no" || entrada == "n" || entrada == false){
//     let comprar = prompt("desea comprar la entrada?")
//     if(comprar == "si"){
//         let dinero = prompt("cuanto dinero tiene?")
//         if(dinero >= 1000){
//             console.log("La venta ha sido exitosa") 
//             console.log("Bienenido, puede pasar")  
//         } else{
//             console.log("La venta no ha sido exitosa")
//             console.log("No puede pasar")
//         } 
//     }
// }

///////////8.

// let numeroIncognita = 9
// let primerNumero = prompt("Ingresa el primer número")

// if(numeroIncognita == primerNumero){
//     console.log("Adivinaste el número!")
// }
// if(numeroIncognita < primerNumero){
//     console.log("El número ingresado es mayor, vuelve a intentarlo")
//     let segundoNumero = prompt("Ingresa otro número")
//     if(numeroIncognita == segundoNumero){
//         console.log("Adivinaste el número!")
//     }
//     if(numeroIncognita < segundoNumero){
//         console.log("El número ingresado es mayor, vuelve a intentarlo")
//         let tercerNumero = prompt("Ingresa otro número")
//         if(numeroIncognita == tercerNumero){
//             console.log("Adivinaste el número!")  
//         }else if(numeroIncognita !== tercerNumero){
//             console.log("Perdiste")
//         }
//     }
//     if(numeroIncognita > segundoNumero){
//         console.log("El número ingresado es menor, vuelve a intentarlo")
//         let tercerNumero = prompt("Ingresa otro número")
//         if(numeroIncognita == tercerNumero){
//             console.log("Adivinaste el número!")  
//         }else if(numeroIncognita !== tercerNumero){
//             console.log("Perdiste")
//         }
//     }    

// }else if(numeroIncognita > primerNumero){
//     console.log("El número ingresado es menor, vuelve a intentarlo")
//     let segundoNumero = prompt("Ingresa otro número")
//     if(numeroIncognita == segundoNumero){
//         console.log("Adivinaste el número!")
//     }
//     if(numeroIncognita < segundoNumero){
//         console.log("El número ingresado es mayor, vuelve a intentarlo")
//         let tercerNumero = prompt("Ingresa otro número")
//         if(numeroIncognita == tercerNumero){
//             console.log("Adivinaste el número!")  
//         }else if(numeroIncognita !== tercerNumero){
//             console.log("Perdiste")
//         }
//     }
//     if(numeroIncognita > segundoNumero){
//         console.log("El número ingresado es menor, vuelve a intentarlo")
//         let tercerNumero = prompt("Ingresa otro número")
//         if(numeroIncognita == tercerNumero){
//             console.log("Adivinaste el número!")  
//         }else if(numeroIncognita !== tercerNumero){
//             console.log("Perdiste")
//         }
//     }    
// }  


///////////////9.

// let edad = prompt("Ingresa tu edad")

// if(edad >=0 && edad <= 12){
//     console.log("Eres un infante")
// }
// if(edad >= 13 && edad <= 18){
//     console.log("Eres un adolecente")
// }
// if(edad >= 19 && edad <= 45){
//     console.log("Eres un Mayor joven")
// }
// if(edad >= 46 && edad <= 99){
//     console.log("Eres un Anciano")
// }
// if(edad > 100){
//     console.log("Realmente tienes esa edad?")
// }

///////////////////////10.

// let player1 = prompt("Primer Jugador")
// let player2 = prompt("Segundo Jugador")

// if (player1 == player2){
//     console.log("Empate")
// }
// if(player1 == "piedra" && player2 == "tijeras"){
//     console.log("Ganó el primer jugador!")
// }
// if(player1 == "piedra" && player2 == "papel"){
//     console.log("Ganó el segundo segundo!")
// }
// if(player1 == "papel" && player2 == "tijeras"){
//     console.log("Ganó el segundo jugador!")
// }
// if(player1 == "papel" && player2 == "piedra"){
//     console.log("Ganó el primer jugador!")
// }
// if(player1 == "tijeras" && player2 == "piedra"){
//     console.log("Ganó el segundo jugador!")
// }
// if(player1 == "tijeras" && player2 == "papel"){
//     console.log("Ganó el primer jugador!")
// }

// if(player1 !== "piedra" && player1 !== "papel" && player1 !== "tijeras"){
//     console.log("El primer jugador hizo trampa!")
// }
// if(player2 !== "piedra" && player2 !== "papel" && player2 !== "tijeras"){
//     console.log("El segundo jugador hizo trampa!")
// }

/////////////////11.
// let color = prompt("Ingresa un color")

// if(color == "Blanco" || color == "Negro" || color == "Verde" || color == "Azul" ||
//     color == "Amarillo" || color == "Rojo" || color == "Rojo" || color == "Marron"){
//     switch(color){
//         case "Blanco":
//             console.log("Falta de color.")
//             break;
//         case "Negro":
//             console.log("Falta de color.")
//             break;
//         case "Verde":
//             console.log("El color de la naturaleza.")
//             break;
//         case "Azul":
//             console.log("El color del agua.")
//             break;
//         case "Amarillo":
//             console.log("El color del sol.")
//             break;
//         case "Rojo":
//             console.log("El color del fuego.")
//             break;
//         case "Marron":
//             console.log("El color de la tierra.")
//             break;   
//     }
// }else{
//     console.log("Excelente elección, no lo teniamos pensado.")
// }

/////////////12.

// let num1 = prompt("Ingrese el primer número")
// let num2 = prompt("Ingrese el segundo número")
// let operacion = prompt("Ingrese la operación")

// if(operacion == "sumar"){    
//     console.log(Number(num1) + Number(num2))
// }

// if(operacion == "restar"){
//     console.log(Number(num1) - Number(num2))
// }

// if(operacion == "multiplicar"){
//     console.log(Number(num1) * Number(num2))
// }

// if(operacion == "dividir"){
//     if(num1 == 0 || num2 == 0){
//         console.log("ERROR")
//     }else{
//         console.log(Number(num1) / Number(num2))
//     }

// }

///////////////////////////13.

// let cont = 0;
// let astk = "*";

// while(cont < 5){
//     console.log(astk);
//     astk = astk + "*";
//     cont = cont + 1;    
// }

////////////////14.

let nombre = prompt("Ingrese su nombre")
let apellidos = prompt("Ingrese sus apellidos")
let num = prompt("Ingrese su numero de documento")
let fecha = prompt("Ingrese su fecha de nacimiento")

console.log(nombre + " "+ apellidos + " "+ num+ " "+ fecha)

let correcto = prompt("los datos están correctos?")

if(correcto == "si"){
    let dni = {
        nombreid : nombre,
        apellidosid : apellidos,
        numid : num,
        fechaid : fecha,
    }
    console.table(dni) 
    console.log("Registro Exitoso")

}else{
    console.log("Vuelva a Intentarlo en un mes")
}










    
















