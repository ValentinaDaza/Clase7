let fechaActual = new Date(1990, 1, 16)

//console.log(fechaActual.getYear()); // getYear da el numero del año a partir de 1900, como estamos en el 2022, arroja 122 años

console.log(fechaActual.getFullYear()); // Da el año actual

console.log(fechaActual.getMonth()); // Da el mes menos uno, ya que enero es el mes 0, y diciembre el mes 11

console.log(fechaActual.getDay()); // Devuelve el numero del día de la semana, teninedo en cuenta que el primer día es el domingo e inicia con el numero 0

console.log(fechaActual.getDate()); // Devuelve el numero del día del mes

// Para ver una fecha decente:

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero", "marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] // Creo arreglo con los meses para que me muestre el mes correcto y no el mes menos uno

console.log("Hoy es el " + dia + " de " + meses[mes] + " del " + anio );

// Si quiero dar una fecha puntual:

//let fechaActual = new Date(1990, 1, 16)