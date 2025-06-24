// Ejercicio 1: Calcular el área de un rectángulo
function areaRectangulo(base, altura) {
    return base * altura;
}

function ejercicio1() {
    let base, altura;
    console.log("Solución 1: Calcular el área de un rectángulo");
    console.log("");
    base = 2;
    altura = 3;
    console.log("Área del rectángulo de " + base + " por " + altura + ": " + areaRectangulo(base, altura));
    base = 5;
    altura = 2;
    console.log("Área del rectángulo de " + base + " por " + altura + ": " + areaRectangulo(base, altura));
    base = 7;
    altura = 4;
    console.log("Área del rectángulo de " + base + " por " + altura + ": " + areaRectangulo(base, altura));
    console.log("_________________________________________________");
    console.log("");
}
/* Teniendo presente que el área de un rectángulo es base * altura
y también que se pide una función que devuelva el resultado
se ha pensado que la misma reciba ambos parámentos, en este caso pasados
desde el mismo código y que la misma sea llamada de diferentes console.log
para mostrar por consola su retorno */

// Ejercicio 2: Contar palabras en una cadena
function contarPalabras(cadena) {
    cadena = cadena + ' ';
    let palabras = 0;
    for (let i = 0; i < cadena.length - 1; i++) {
        if (cadena[i] !== ' ' && cadena[i + 1] === ' ') {
            palabras += 1;
        }
    }
    return palabras;
}

function ejercicio2() {
    console.log("Solución 2: Contar palabras en una cadena");
    console.log("");
    let texto = 'Hola Mundo';
    console.log('Cadena: \"' + texto + '\". Palabras: ' + contarPalabras(texto));
    texto = 'Hola      Mundo';
    console.log('Cadena: \"' + texto + '\". Palabras: ' + contarPalabras(texto));
    texto = ' Hola Mundo ';
    console.log('Cadena: \"' + texto + '\". Palabras: ' + contarPalabras(texto));
    texto = 'A B C';
    console.log('Cadena: \"' + texto + '\". Palabras: ' + contarPalabras(texto));
    texto = 'A';
    console.log('Cadena: \"' + texto + '\". Palabras: ' + contarPalabras(texto));
    texto = '  ';
    console.log('Cadena: \"' + texto + '\". Palabras: ' + contarPalabras(texto));
    console.log("_________________________________________________");
    console.log("");
}
/* Teniendo presente que pide "devolver" se empleará una función que retorne 
la cantidad de palabras de la cadena y se muestro por consola por fuera de la función.
Se empleará trim para descartar espacion al inicio y al final de la cadena.
Se sumará un espacio al final de la cadena para prepararla a los efectos lógicos del control
Se recorrerá la cadena contando los cambios de caracter distinto de " " a caracter igual a " ". */

// Ejercicio 3: Contar vocales en una cadena
function contarVocales(cadena) {
    cadenaEnMinuscula = cadena.toLowerCase()
    let vocales = 0;
    const textoReferencia = 'aeiouáéíóúü'
    for (let i = 0; i < cadena.length; ++i) {
        if (textoReferencia.includes(cadenaEnMinuscula[i])) {
            vocales += 1;
        }
    }
    console.log('Cadena: \"' + cadena + '\". Cantidad de vocales: ' + vocales);
}

function ejercicio3() {
    console.log("Solución 3: Contar vocales en una cadena");
    console.log("");
    let texto = 'Alelí, Árbol y pingüino';
    contarVocales(texto);
    texto = 'Ctrl';
    contarVocales(texto);
    console.log("_________________________________________________");
    console.log("");
}
/* En este caso no pide que la función devuelva el resultado, por lo que a los fines 
didácticos, se mostrará desde el cuerpo de la misma (si bien no es requerimiento).
Se recorrerá la cadena pasada como parámetro y se incrementará un contador en caso que
el caracter sea una vocal (se contemplarán los signos ortográficos actuales de la RAE 
como la tilde y la diéresis en la u.*/

// Ejercicio 4: Encontrar el palíndromo
function buscarPalindromo(cadena) {
    cadena = cadena.normalize("NFD"); // Normaliza la cadena a su forma descompuesta
    cadena = cadena.replace(/[\u0300-\u036f\s]/g, ""); // Elimina los signos diacríticos (caracteres combinatorios) y espacios
    cadena = cadena.toLowerCase(); // Lleva a minúscula para la correcta comparación de caractéres
    let limite = Math.trunc(cadena.length);
    for (let i = 0; i < limite; ++i)  {
        if (cadena[i] !== cadena[cadena.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function ejercicio4() {
    console.log("Solución 4: Encontrar el palíndromo");
    console.log("");
    let texto = 'Palabra';
    console.log('Cadena: \"' + texto + '\" --- Palíndromo: ' + buscarPalindromo(texto));
    texto = 'Aérea';
    console.log('Cadena: \"' + texto + '\" --- Palíndromo: ' + buscarPalindromo(texto));
    texto = 'erre'
    console.log('Cadena: \"' + texto + '\" --- Palíndromo: ' + buscarPalindromo(texto));
    texto = 'Dábale arroz a la zorra el abad'
    console.log('Cadena: \"' + texto + '\" --- Palíndromo: ' + buscarPalindromo(texto));
    console.log("_________________________________________________");
    console.log("");
}
/* La función retornará true o false, de aquerdo a lo requerido, recibiendo una cadena.
En primera instancia se retirarán los signos diacríticos (ya que de lo investigado surge 
que generalmente en nuestro idioma se consideran palíndromos por la ubicación de las letras
desconociendo estos signos, como por ej "aérea". Aquí cabe mencionar que se empleó aportes de 
Gemini en las expresiones de los métodos normalize y replace, habiendo aportado saberes al grupo.
Luego de esto, se recorrerá la primera mitad de la cadena, comparándola con sus opuestos en espejo, 
hasta la detección de una diferencia. 
Acepta frases, quitando el espaciado para sun análisis. */

// Ejercicio 5: Convertir la edad de un perro a años humanos
function convertirEdadPerroAHumano(edadPerro) {
    edadPerro = parseFloat(edadPerro);
    if (edadPerro > 0) {
        console.log('Tu perro tiene ' + edadPerro*7 + ' años humanos.');
    } else {
        console.log('El dato ingresado no es una edad válida.');
    }
}

function ejercicio5() {
    console.log("Solución 5: Convertir edad de perro a años humanos");
    console.log("");
    let edadIngresada = prompt("Por favor, ingresa la edad de tu perro: ");
    convertirEdadPerroAHumano(edadIngresada);
    console.log("_________________________________________________");
    console.log("");
}
/* Tomando el valor ingresado por el usuario, se multiplicará por 7 y se mostrará por consola, 
en caso de ser positivo. Si es 0 o negativo, se informará que el numero no es adecuado */

// Ejercicio 6: Primera letra de cada palabra a mayúscula
function capitalizarPalabras(cadena) {
    const palabras = cadena.split(' ');
    const palabrasCapitalizadas = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase());
    return palabrasCapitalizadas.join(' ');
}

function ejercicio6() {
    console.log("Solución 6: Primera letra de cada palabra a mayúscula");
    console.log("");
    let texto = prompt("Por favor, ingresa una frase: ");
    if (texto !== null && texto.trim() !== "") {
        console.log('Frase capitalizada: ' + capitalizarPalabras(texto));
    } else {
        console.log('No se ingresó una frase.');
    }
    console.log("_________________________________________________");
    console.log("");
}
/* Tomando el valor ingresado por el usuario mediante un prompt, se separarán las 
palabras con el método split, teniendo en cuenta el espaciado. Luego se efectuará un mapeo 
tomando la primer letra de cada una y se convertirá a mayúscula, haciendo lo opuesto
con el resto de la palabra y se unirá primera letra y resto. Por último, mendiante el 
método join, se unirá nuevamente la cadena */

// Ejercicio Nro. 7: Mostrar n elementos de la serie de Fibonacci
function serieFibonacci(elementos) {
    let serie = (elementos === 1) ? [0] : [0, 1];
    for (let i = 2; i < elementos; ++i) {
        serie.push(serie[i-2] + serie[i-1]);
    }
    return serie;
}

function ejercicio7() {
    console.log("Solución 7: Sucesión de Fibonacci");
    console.log("");
    let elementos = prompt('Por favor, ingrese la cantidad de elementos de la serie: ');
    if (parseFloat(parseInt(elementos)) === parseFloat(elementos) && parseInt(elementos) > 0) {
        let imprimrSalida = (parseInt(elementos) === 1)
        ? 'El primer elemento de la serie de Fibonacci es: '
        : 'Los primeros ' + elementos + ' elementos de la serie de Fibonacci son: ';
        console.log(imprimrSalida);
        console.log(serieFibonacci(parseInt(elementos)));
    } else {
        console.log('Debe ingresar un entero positivo');
    }
    console.log("_________________________________________________");
    console.log("");
}
/* La función recibe un número entero positivo, de lo contrario se informa tal situación.
Se emplea el operador ternario para conformar el primer (o los 2 primeros) elementos de
la serie, ya que estos son los únicos independientes.
De corresponder, se completa el array agregando los elementos faltantes, los cuales
son dependientes de los anteriores, ya que desde el tercer elemento, estos se conforman
sumando los 2 elementos precedentes. */

// Ejercicio Nro. 8: Lista de productos
// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
function mostrarNombrePrecio(lista) {
    console.log('Punto 1 - Nombre y Precio de los productos con forEach');
    lista.forEach(function(producto) {
        console.log('Producto: ' + producto.nombre + ' --- Precio: ' + producto.precio);
    });
    console.log("_________________________________________________");
}
// 2. Usando map: Crear un array con solo los nombres de los productos
function crearArrayNombresProductos(lista) {
    console.log('Punto 2 - Crear array solo con nombre de producto con map');
    let arrayNombresProductos = lista.map(function(producto) {
        return producto.nombre;
    });
    console.log(arrayNombresProductos);
    console.log("_________________________________________________");
}
// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
function productosPorSotck(lista) {
    console.log('Punto 3 - Productos electrónicos con stock mayor a 20');
    let arrayElectronicosStockAlto = lista.filter(function(producto) {
       return producto.stock > 20 && producto.categoria === 'electrónica';
    });
    console.log(arrayElectronicosStockAlto);
    console.log("_________________________________________________");
}
// 4. Usando find: Encontrar el producto con id 3
function buscarProductoPorId (lista) {
    console.log('Punto 4 - Encontrar el producto con id 3');
    let arrayProductoPorId = lista.find(function(producto) {
        return producto.id === 3;
    });
    console.log(arrayProductoPorId);
    console.log("_________________________________________________");
}
// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
function calcularValorTotalStock (lista) {
    console.log('Punto 5 - Calcular el valor total del inventario');
    let valorTotal = lista.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.stock);
    }, 0);
    console.log('El inventario tiene un valor total de: ' + valorTotal);
}

function ejercicio8() {
    const productos = [
        { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
        { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
        { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
        { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
        { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
    ];
    console.log("Solución 8: Lista de productos");
    console.log("");
    mostrarNombrePrecio(productos);
    crearArrayNombresProductos(productos);
    productosPorSotck(productos);
    buscarProductoPorId(productos);
    calcularValorTotalStock(productos);
    console.log("_________________________________________________");
    console.log("");
}
/* Se creará el array en la función raíz del ejercicio y se pasará como argumento
a las funciones que ponen en práctica los métodos solicitados. 
Desde cada función se mostrará por consola el resultado requerido. */

// Ejercicio Nro. 9: Estudiantes y Calificaciones
// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
function mostrarNombreYEdad(lista) {
    console.log('Punto 1 - Mostrar nombre y edad de cada estudiante con forEach');
    lista.forEach(function(estudiante) {
        console.log('Nombre: ' + estudiante.nombre + ' --- Edad: ' + estudiante.edad + ' años.');
    });
    console.log("_________________________________________________");
}
// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
function crearArrayNombresYPromedios(lista) {
    console.log('Punto 2 - Crear array de nombres y promedios con map');
    let arrayNombresYPromedios = lista.map(function(estudiante) {
        let promedio = estudiante.calificaciones.reduce((acumulador, nota) => {
            return acumulador + nota;
        }, 0)/estudiante.calificaciones.length;
        return [estudiante.nombre, promedio];
    });
    console.log(arrayNombresYPromedios);
    console.log("_________________________________________________");
}
// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
function buscarPromediosAltos(lista) {
    console.log('Punto 3 - Estudiantes con pormedio mayor a 7.5');
    let arrayConPromedios = lista.map(function(estudiante) {
        let promedio = estudiante.calificaciones.reduce((acumulador, nota) => {
            return acumulador + nota;
        }, 0)/estudiante.calificaciones.length;
        return {id:estudiante.id, nombre:estudiante.nombre, edad:estudiante.edad, promedio:promedio};
    });
    let arrayPromediosAltos = arrayConPromedios.filter(function(estudiante) {
       return estudiante.promedio > 7.5;
    });
    console.log(arrayPromediosAltos);
    console.log("_________________________________________________");
}
// 4. Usando find: Encontrar estudiante llamado 'María'
function buscarEstudiante (lista) {
    console.log('Punto 4 - Encontrar estudiante llamado \'María\'');
    let arrayEstudiantePorNombre = lista.find(function(estudiante) {
        return estudiante.nombre === 'María';
    });
    console.log(arrayEstudiantePorNombre);
    console.log("_________________________________________________");
}
// 5. Usando reduce: Calcular la edad promedio de los estudiantes
function calcularEdadPromedio(lista) {
    console.log('Punto 5 - Calcular edad promedio de los estudiantes');
    let edadPromedio = Math.round(lista.reduce((acumulador, estudiante) => {
        return acumulador + estudiante.edad;
    }, 0)/lista.length);
    console.log('La edad promedio de los estudiantes es ' + edadPromedio + ' años.');
} 

function ejercicio9() {
    const estudiantes = [
        { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
        { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
        { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
        { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
    ];
    console.log("Solución 9: Estudiantes y Calificaciones");
    console.log("");
    mostrarNombreYEdad(estudiantes);
    crearArrayNombresYPromedios(estudiantes);
    buscarPromediosAltos(estudiantes);
    buscarEstudiante(estudiantes);
    calcularEdadPromedio(estudiantes);
    console.log("_________________________________________________");
    console.log("");
}
/* Se creará el array en la función raíz del ejercicio y se pasará como argumento
a las funciones que ponen en práctica los métodos solicitados. 
Desde cada función se mostrará por consola el resultado requerido.
En el particular del punto 5, la edad promedio se redondeó a entero ya que habitualmente,
cuando hablamos de edad, nos expresamos de esta manera. */

// Películas
// 1. Usando forEach: Mostrar título y año de cada película
function mostrarTituloYAño(lista) {
    console.log('Punto 1 - Título y año de cada película con forEach');
    lista.forEach(function(pelicula) {
        console.log('Título: ' + pelicula.titulo + ' --- Año: ' + pelicula.año);
    });
    console.log("_________________________________________________");
}
// 2. Usando map: Crear array de títulos en mayúsculas
function crearArrayTitulosMayusculas(lista) {
    console.log('Punto 2 - Crear array de títulos en mayúsculas con map');
    let arrayTitulosMayusculas = lista.map(function(pelicula) {
        return pelicula.titulo.toUpperCase();
    });
    console.log(arrayTitulosMayusculas);
    console.log("_________________________________________________");
}
// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
function obtenerDramasRatingAlto(lista) {
    console.log('Punto 3 - Dramas con rating mayor a 8.5');
    let arrayDramasRatingAlto = lista.filter(function(pelicula) {
       return pelicula.genero === 'drama' && pelicula.rating > 8.5;
    });
    console.log(arrayDramasRatingAlto);
    console.log("_________________________________________________");
}
// 4. Usando find: Encontrar película estrenada en 2014
function buscarPeliculaPorAño (lista) {
    console.log('Punto 4 - Encontrar la película estrenada en 2014');
    let arrayPeliculaPorAño = lista.find(function(pelicula) {
        return pelicula.año === 2014;
    });
    console.log(arrayPeliculaPorAño);
    console.log("_________________________________________________");
}
// 5. Usando reduce: Calcular la duración total de todas las películas
function calcularDuracionTotal (lista) {
    console.log('Punto 5 - Calcular la duración total de las películas');
    let duracionTotal = lista.reduce((acumulador, pelicula) => {
        return acumulador + pelicula.duracion;
    }, 0);
    console.log('La duración total de las películas es ' + duracionTotal + ' minutos (' +
        parseInt(duracionTotal/60) + ' horas y ' + duracionTotal%60 + ' minutos).');
}

function ejercicio10() {
    const peliculas = [
        { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
        { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
        { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
        { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
        { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
    ];
    console.log("Solución 10: Películas");
    console.log("");
    mostrarTituloYAño(peliculas);
    crearArrayTitulosMayusculas(peliculas);
    obtenerDramasRatingAlto(peliculas);
    buscarPeliculaPorAño(peliculas);
    calcularDuracionTotal(peliculas);
    console.log("_________________________________________________");
    console.log("");
}
/* Se creará el array en la función raíz del ejercicio y se pasará como argumento
a las funciones que ponen en práctica los métodos solicitados. 
Desde cada función se mostrará por consola el resultado requerido. */