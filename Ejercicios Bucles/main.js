///////////////1.
// let num = prompt("Ingrese un número")

// for(i=0 ; i<=10 ; i++){
//     let mult = num * i;
//     console.log(mult)
// }

/////////////2.

// let num = prompt('Ingrese numeros')
// let numeros = []
//  while ( num != 0 && num < 100 ){

//         if( num != null || num != ""){
//             numeros.push( num )
//         }
//         num = prompt('Ingrese numeros')
// }
// console.log( numeros )

////////////////3. Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un
// rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor
// guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle
// al usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario
// adivine el número secreto. Por último mostrar un mensaje de felicitaciones y decirle en
// cuantos intentos lo ha realizado.


// let lastNumber = numeros.slice(-1);
// let contador = 0;
// console.log(lastNumber)

// let adivinarNumero = prompt("Adivina el número")

// if(adivinarNumero == lastNumber){
//     console.log("Adivinaste!")
// }else{
//     while(adivinarNumero != lastNumber){

//         if(adivinarNumero > lastNumber){
//             console.log("El número es menor")
//             adivinarNumero = prompt("Adivina el número")
//             contador += 1
//         }
//         if(adivinarNumero < lastNumber){
//             console.log("El número es mayor")
//             adivinarNumero = prompt("Adivina el número")
//             contador += 1
//         }
//         if  (adivinarNumero == lastNumber){
//             console.log("Adivinaste!")
//             console.log(`Te tomó ${contador} intentos adivinar`)
//         }
//     }
// }

///////////////4.Realizar un programa que reciba un número y muestre de alguna forma todos sus
// divisores.

// let num = prompt("Ingresa un número")

// let div = []

// for (i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       div.push(i);
//     }
// }

// console.log(div)

////5.Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre
// un mensaje por consola con cada uno de los elementos del array.

// let array = ["calica", "quione", "shadow", "antique", "bj", "marco", "abby", "petunia", "brina", "chueco"]

// for(let name of array){
//     console.log(`${name} is the name of one of my pets `)
// }

/////6. Dado un array de 10 números, realizar un programa que muestre por consola el doble
// de cada uno de los elementos.

// let num = [1,3,4,6,7,67,34,56,90,12]
// let double = []

// for( let num2 of num ){        
//         double.push(num2 *2)
//     }

// console.log(double)

///7. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que
// muestre un mensaje de presentación por cada elemento del array.

// let pets = [{ nombre: "quione", especie: "felino", edad: 5, color: "blanco" },
// { nombre: "calica", especie: "felino", edad: 6, color: "calico" },
// { nombre: "antique", especie: "canino", edad: 9, color: "leonado" },
// { nombre: "shadow", especie: "canino", edad: 14, color: "negro" },
// { nombre: "bj", especie: "canino", edad: 2, color: "blanco" }]

// function presentation(objeto) {
//     return `Mi mascota se llama ${objeto.nombre} es un ${objeto.especie} tiene ${objeto.edad} años y es de color ${objeto.color}`
// }
// function print(array) {
//     let saludo = " "
//     for (let pet of array) {
//         saludo = presentation(pet)
//         console.log(saludo)
        
//     }
    
    
// }

// print(pets)

////////8.Dado un array de 10 números, realizar un programa que recorra el array y solo muestre
// los números impares.

// let num = [1,3,4,6,7,67,34,56,90,12]
// let imp = []

// for (let impa of num){
//     if(impa % 2 !== 0){
//         imp.push(impa)
//     }
// }

// console.log(imp)

////9.Realizar un programa que permita la entrada de números y calcule la suma de los
// números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el
// usuario ingresa un 0.

// let num = prompt('Ingrese numeros')
// let numeros = []
//  while ( num != 0 && num < 100 ){

//         if( num != null || num != ""){
//             numeros.push( num )
//         }
//         num = prompt('Ingrese numeros')
// }
// console.log(numeros)

// let imp = []
// let par = []
// let sumaImpares = 0;
// let sumaPares = 0;

// for (let impa of numeros){
//     if(impa % 2 !== 0){
//         imp.push(impa)
//     }
// }
// for (let par2 of numeros){
//     if(par2 % 2 == 0){
//         par.push(par2)
//     }
// }

// console.log(imp)
// console.log(par)

// for(let i of imp){
//     sumaImpares += Number(i);    
// }
// console.log(`La suma de los números Impares es ${sumaImpares}`)

// for(let i of par){
//     sumaPares += Number(i);    
// }
// console.log(`La suma de los números Pares es ${sumaPares}`)

/////10. Dado un array de 10 números, realizar un programa que imprima por pantalla el
// número más grande.

let num = [1,3,4,6,7,670,34,5,100,12];
let mayor = 0;

for(i = 0; i < num.length; i++){
    if (num[i] > mayor)
    {
        mayor = num[i];
    }
}

console.log(mayor)














