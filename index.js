// const calcularcuadrado = function(a){
//     return(a*a)
// }

// console.log(calcularcuadrado(7))

// let a = 0

// console.log(a)

// {
//     let a=1
//     console.log(a)
// }

// console.log(a)
/*
const sumarCuadrados = function(a,b){
    const elevarCuadrado = function(a){
        const b=0
        return a*a  
    }
    
    return elevarCuadrado(b)+elevarCuadrado(b)
}

console.log(sumarCuadrados(1,2))
*/
/* const calcular = function(a,b){
    const sumar = function(){
        return a+b
    }
    const restar = function(){
        return a-b
    }
    return sumar
} 

const multi = function (a, b) {
    return a * b
}

const divi = function (a, b) {
    return a / b
}

const calc=function(a, b, fun) {
    return fun(a,b)
    
}
console.log(calc(6, 7, multi))

const arbolar = function(arbol = 'pino', num=2){
    console.log(`plantar ${arbol} ${num} veces`)
}


arbolar('eucalipto', 50)


const muebleA = {
    madera: 'roble',
    altura:22.2,
    color: 'marron',
    precio: 399,
    esNueva: true
}

const muebleB = {
    madera: 'pino',
    altura:35,
    color: 'azul',
    precio: 99,
    esNueva: false
}

const describirMueble=function(mueble){
    return (`Este mueble esta hecho de ${mueble.madera} mide ${mueble.altura}cm, es de color ${mueble.color} y tiene un precio de ${mueble.precio}€`)
    
}

// console.log(describirMueble(muebleB))


const aplicarDescuento=function(mueble,descuento){
    mueble.precio=mueble.precio-descuento
}

console.log('antes del descuento: ',muebleA)
aplicarDescuento(muebleA, 10)
console.log('despues del descuento: ',muebleA)
*/

const libroA = {
    titulo: '1984',
    autor: 'George Orwell',
    paginas: 170,
    precio: 9.99
}

const libroB = {
    titulo: 'Crónica del pájaro que da cuerda al mundo',
    autor: 'Haruki Murakami',
    paginas: 920,
    precio: 15.99
}

const describir = function(libro){
    return {
        VersionLarga: `Titulo: ${libro.titulo} Autor: ${libro.autor} Paginas: ${libro.paginas} Precio: ${libro.precio}`,
        VersionCorta: `Titulo: ${libro.titulo} Autor: ${libro.autor}`
    }
}

console.log(describir(libroA))

const restauranteA = {
    nombre: 'El celler de can Roca',
    capacidad: 100,
    ocupacion: 75,
    entrar(visitantes){
        this.ocupacion= this.ocupacion + visitantes
    },
    salir(visitantes){
        this.ocupacion = this.ocupacion - visitantes
    }
}
console.log(restauranteA)
restauranteA.entrar(7)
console.log(restauranteA)
restauranteA.salir(18)
console.log(restauranteA)