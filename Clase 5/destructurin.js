let cursos = ["Programación", "MKT", "Data Science", "Ux"];

// DESTRUCTURACIÓN DE ARRAYS

let [programación, mkt] = cursos;

console.log(cursos);
console.log(programación);
console.log(mkt);

// DESTRUCTURACIÓN DE UN OBJETO LITERAL

let persona ={
    nombre : "Carli",
    edad : 26,
    domicilio : "Calle falsa 123"
}

let {nombre, edad} = persona;

console.log(persona);
console.log(nombre);
console.log(edad);

// Ejercicio

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
 
let [ , bariloche, ,china] = destinosDelMundo;

console.log(destinosDelMundo);
console.log(bariloche);
console.log(china);
