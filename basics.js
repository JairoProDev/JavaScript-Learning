const PI = 3.1416;
// Usaremos const para variablesque no cambiaran su valor
// const PI = 3.1415926535897932384626433832795028841971693993751058

//const VACIO;
console.log("las variables de tipo const no pueden ser solo inicializadas, tienes que declararlas")

const objeto = {
    nombre: "Jairo",
    edad: 20,
    apellido: "Sasaqui",
}

const colores = ["azul", "morado", "verde", "celeste"]


console.log(objeto);
console.log(colores);

objeto.userNme = "JairoProDev"
objeto.email = "JairoProDev@gmail.com"

colores.push("rosado")

console.log(objeto);
console.log(colores);