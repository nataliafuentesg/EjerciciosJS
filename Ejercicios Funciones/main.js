//1.

let nombre = "Natalia";

function saludar () {
    // let nombre = prompt("Ingrese su nombre")
    const saludo = `Hola ${nombre}` 
    console.log(saludo)
    return saludo
}
let functionReturn = saludar(nombre)


//2.

let num1 = 3;
let num2 = 4;
let num3 = 6;
let num4 = 7;

function multiplicar(parametro1 , parametro2){
    let resultado = parametro1 * parametro2;
    console.log(resultado)
    return resultado
}

let multResult1 = multiplicar(num1, num2)
let multResult2 = multiplicar(num3, num4)

//3.

let base = 5
let altura = 3
let lado1 = 4
let lado2 = 5
let lado3 = 6

function areaTriangulo (b, a){
    let area= b*a;
    console.log(area)
    return area
}

function perimetroTriangulo(l1, l2, l3){
    let perimetro = l1+l2+l3
    console.log(perimetro)
    return perimetro
}

let areaT = areaTriangulo(base, altura)
let peri = perimetroTriangulo(lado1, lado2, lado3)

//4. 

let precio = prompt("Ingrese precio")
let cantidad = prompt("Ingrese cantidad")

function calcularPrecio(p, c){
    if(c >= 10){
        let precioTotal = (p*c)*0.9
        console.log(precioTotal)
        return precioTotal
    }
    if(c >= 20){
        let precioTotal = (p*c)*0.8
        console.log(precioTotal)
        return precioTotal
    }
    
    let precioTotal = p*c
    console.log(precioTotal)
    return precioTotal
}

let pt = calcularPrecio(precio, cantidad)

//5.
let edad = prompt("Ingrese su edad")

function esMayorDeEdad(e){
    if(e>=18){
        console.log("Eres mayor de edad")
    } else{
        console.log("Eres menor de edad")
    }
}

let edadv = esMayorDeEdad(edad)

//6.
let ingresoAnual = prompt("Digite su Ingreso Anual")

function calcularImpuesto (i){
    if(i <= 10000){
        let impuesto = i* 0.1
        console.log(`el valor a pagar es ${impuesto}`)
        return impuesto
    }
    if(i > 10000 && i <= 20000){
        let impuesto = i* 0.15
        console.log(`el valor a pagar es ${impuesto}`)
        return impuesto   
    }

    let impuesto = i* 0.20
    console.log(`el valor a pagar es ${impuesto}`)
    return impuesto

}

let volrAPagar = calcularImpuesto(ingresoAnual)

//7.

let dia = prompt("Digita el día")

function verificarDia(d){
    switch (d){
        case "1":
            console.log("Es un día Laboral")
            break;
        case "2":
            console.log("Es un día Laboral")
            break;
        case "3":
            console.log("Es un día Laboral")
            break;
        case "4":
            console.log("Es un día Laboral")
            break;
        case "5":
            console.log("Es un día Laboral")
            break;
        case "6":
            console.log("Es fin de semana")
            break;
        case "7":
            console.log("Es fin de semana")
            break;
    }

}

let diav = verificarDia(dia)
