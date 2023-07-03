//1. Mi Nombre

let miNombre
miNombre = "Natalia"

//2. Mi Apellido

let miApellido
miApellido = "Fuentes"

//3. Mi Edad

let miEdad
miEdad = 30

//4. Mi Mascota

let miMascota
miMascota = "Quione"

//5. Edad Mascota

let edadMascota
edadMascota = 5

//6 mostrar en Consola
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

//7. Nombre Completo

let nombreCompleto
nombreCompleto = miNombre + " " + miApellido
// console.log(nombreCompleto)

//8. 

let textoPresentacion = miNombre + " " +  miApellido + " " + miEdad + " " + miMascota + " " + edadMascota + " " + nombreCompleto
//console.log(textoPresentacion)

//9.
let sumaEdasdes = miEdad + edadMascota
console.log(sumaEdasdes)
let restaEdades = miEdad - edadMascota
console.log(restaEdades)
let productoEdades = miEdad * edadMascota
console.log(productoEdades)
let divisionEdades = miEdad / edadMascota
console.log(divisionEdades)

//10.
let alumno = {
    nombre: "Natalia",
    apellido: "Fuentes",
    edad: 30,
    mascota: "quione",
    edadmascota: 5,
}
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.mascota)
console.log(alumno.edadmascota)

//11.
let mascota = {
    nombre: "Quione",
    edad : 5,
    color : "blanco",
    raza : "domestico de pelo largo ",
    peso : 3.5
}

console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.color)
console.log(mascota.raza)
console.log(mascota.peso)

//12.

let frutas = ["manzana", "pera", "uvas", "platano", "naranja" ]
console.table(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])



//14.

let numeros = ["1", "2", "3", "4", "5" ]
console.table(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//15.

let familia = ["padre", "madre", "hermano", "prima", "tia" ]
console.table(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//13.
let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4]
console.log(textoAleatorio)

//16.

let edad = prompt("Ingrese su edad")
let soyMayordeEdad = edad > 18
console.log("Soy mayor de edad " + soyMayordeEdad)

//17.
let mi_Edad = prompt("Ingrese su edad")
let edadCompañero = prompt("Ingrese la edad de su compañero")
let edadesIguales = mi_Edad == edadCompañero
let soyMayor = mi_Edad>edadCompañero
let soyMenor = mi_Edad<edadCompañero
console.log("mi edad es igual a la de mi compañero " + edadesIguales)
console.log("mi edad es mayor a la de mi compañero " + soyMayor)
console.log("mi edad es menor a la de mi compañero " + soyMenor)

//18.

let mi_edad = prompt("Ingrese edad")
let altura = prompt("Ingrese altura")
let puedeSubir = mi_edad>6 && altura>120
console.log("Puede subir a la atraccion " + puedeSubir)

//19.
let paseUsuario = prompt("Ingrese el tipo de pase")
let saldo = prompt("Ingrese saldo")

let pudePasar = paseUsuario=="VIP" || saldo>1000
console.log("La persona puede pasar " + pudePasar) 



