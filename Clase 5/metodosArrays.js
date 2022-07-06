/*let notas = [10, 4, 5, 8, 9, 2, 7]; // Tengo notas en escala de 0 al 10 y quiero tenerlas en escala de 0 al 100

let notasHastaEl100 = notas.map(function(numero){
    return numero *10;
})

//console.log(notasHastaEl100); // Me devuelve un nuevo array

// si quiero conocer las notas aprobadas, estas serían las >= 7

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
})

//console.log(notasAprobadas) // Va a mostrar en pantalla las notas mayores o iguales a 7 del arreglo notas, ya que las filtre.

//Si quiero una suma de todas las notas

let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;

})

//console.log(sumaNotas);

// Si quiero realizar una operacion por cada uno de los elementos del arrays como por ejemplo saber en que posicion tengogo cada nota: 

notas.forEach(function(valor, indice){
    console.log("En la posición " + indice + "tengo el valor " + valor);
})*/

// Ejercicio

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let estudiantesAprobados = estudiantes.filter(function(nota){
    return nota >= 7;
})

let estudiantesReprobados = estudiantes.filter(function(nota){
    return nota < 7;
});

console.log(estudiantesAprobados)
