/*let peliculasAccion = ["End Game", "Iron Man 3", "Capitan América"];
let peliculasComedia = ["Mi pobre Angelito", "Qué pasó ayer"];
// Cómo podría mostrar todas la peliculas que tengo?

let peliculas = [...peliculasAccion, ...peliculasComedia]; // Poniendo tres puntos antes de cada nombre de mi arreglo, obtengo un arreglo con la mezcla de peliculas en acción y peliculas de comedia

console.log(peliculas);

// Para objetos

let generoComedias = {
    nombreGenero : "Comedia",
    popularidad : 3
}

/*let miPobreAngelito ={
    nombre : "Mi pobre Angelito",
    duracion : 120
}

let quePasoAyer ={
    nombre : "¿Qué pasó ayer?"
    duracion : 110
}

//Si quiero incluir dentro de cada objeto, los atributos del objeto peliculas de comidia, sin necesidad de poner un objeto dentro de otro

let miPobreAngelito ={
    nombre : "Mi pobre Angelito",
    duracion : 120,
    ...generoComedias
}

let quePasoAyer ={
    nombre : "¿Qué pasó ayer?",
    duracion : 110,
    ...generoComedias
}

console.log(miPobreAngelito);
console.log(quePasoAyer);
*/
//for (let i=0; i<nombreDePeliculas.length; i++)
// Esta funcion me dice si una persona vio una pelicula o no, y este se va modificando a medida q la persona las vaya viendo

function peliculasVistas(...nombreDePeliculas){
    for (let i=0; i<nombreDePeliculas.length; i++)
    console.log("La persona ya vió " + nombreDePeliculas[i])
}

peliculasVistas("End Game", "Iron Man 3", "Mi pobre angelito", "Qué pasó ayer?");
