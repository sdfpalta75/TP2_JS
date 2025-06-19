// Ejercicio 1: Calcular el área de un rectángulo

/* Teniendo presente que el área de un rectángulo es base * altura
y también que se pide una función que devuelva el resultado
se ha pensado que la misma reciba ambos parámentos, en este caso pasados
desde el mismo código y que la misma sea llamada de diferentes console.log
para mostrar por consola su retorno */

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

// Ejercicio 2: Contar palabras en una cadena

/* Teniendo presente que pide "devolver" se empleará una función que retorne 
la cantidad de palabras de la cadena y se muestro por consola por fuera de la función.
Se empleará trim para descartar espacion al inicio y al final de la cadena.
Se sumará un espacio al final de la cadena para prepararla a los efectos lógicos del control
Se recorrerá la cadena contando los cambios de caracter distinto de " " a caracter igual a " ". */

function contarPalabras(cadena) {
    cadena = cadena + ' ';
    let palabras = 0;
    for (let i = 0; i < cadena.length - 1; i++) {
        if (cadena[i] != ' ' && cadena[i + 1] == ' ') {
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

// Ejercicio 3: Contar vocales en una cadena

/* En este caso no pide que la función devuelva el resultado, por lo que a los fines 
didácticos, se mostrará desde el cuerpo de la misma (si bien no es requerimiento).
Se recorrerá la cadena pasada como parámetro y se incrementará un contador en caso que
el caracter sea una vocal (se contemplarán los signos ortográficos actuales de la RAE 
como la tilde y la diéresis en la u.*/

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

// Ejercicio 4: Encontrar el palíndromo

/* La función retornará true o false, de aquerdo a lo requerido, recibiendo una cadena.
En primera instancia se retirarán los signos diacríticos (ya que de lo investigado surge 
que generalmente en nuestro idioma se consideran palíndromos por la ubicación de las letras
desconociendo estos signos, como por ej "aérea". Aquí cabe mencionar que se empleó aportes de 
Gemini en las expresiones de los métodos normalize y replace, habiendo aportado saberes al grupo.
Luego de esto, se recorrerá la primera mitad de la cadena, comparándola con sus opuestos en espejo, 
hasta la detección de una diferencia. 
Acepta frases, quitando el espaciado para sun análisis. */

function buscarPalindromo(cadena) {
    cadena = cadena.normalize("NFD"); // Normaliza la cadena a su forma descompuesta
    cadena = cadena.replace(/[\u0300-\u036f\s]/g, ""); // Elimina los signos diacríticos (caracteres combinatorios) y espacios
    cadena = cadena.toLowerCase(); // Lleva a minúscula para la correcta comparación de caractéres

    let limite = Math.trunc(cadena.length);

    for (let i = 0; i < limite; ++i)  {
        if (cadena[i] != cadena[cadena.length - 1 - i]) {
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

// Ejercicio 5: Convertir la edad de un perro a años humanos

/* Tomando el valor ingresado por el usuario, se multiplicará por 7 y se mostrará por consola, 
en caso de ser positivo. Si es 0 o negativo, se informará que el numero no es adecuado */

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

// Ejercicio 6: Primera letra de cada palabra a mayúscula

/* Tomando el valor ingresado por el usuario mediante un prompt, se separarán las 
palabras con el método split, teniendo en cuenta el espaciado. Luego se efectuará un mapeo 
tomando la primer letra de cada una y se convertirá a mayúscula, haciendo lo opuesto
con el resto de la palabra y se unirá primera letra y resto. Por último, mendiante el 
método join, se unirá nuevamente la cadena */

function capitalizarPalabras(cadena) {
    const palabras = cadena.split(' ');
    const palabrasCapitalizadas = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase());
    console.log('Frase capitalizada: ' + palabrasCapitalizadas.join(' '));
}

function ejercicio6() {
    console.log("Solución 6: Primera letra de cada palabra a mayúscula");
    console.log("");

    let texto = prompt("Por favor, ingresa una frase: ");
    if (texto !== null && texto.trim() !== "") {
        capitalizarPalabras(texto);
    } else {
        console.log('No se ingresó una frase.');
    }

    console.log("_________________________________________________");
    console.log("");
}

function ejercicio7() {
    console.log("Solución 7: Sucesión de Fibonacci");
    console.log("");

    console.log("Ejercicio 7 en construcción");

    console.log("_________________________________________________");
    console.log("");
}

function ejercicio8() {
    console.log("Solución 8: Lista de productos");
    console.log("");

    console.log("Ejercicio 8 en construcción");

    console.log("_________________________________________________");
    console.log("");
}

function ejercicio9() {
    console.log("Solución 9: Estudiantes y Calificaciones");
    console.log("");

    console.log("Ejercicio 9 en construcción");

    console.log("_________________________________________________");
    console.log("");
}

function ejercicio10() {
    console.log("Solución 10: Películas");
    console.log("");

    console.log("Ejercicio 10 en construcción");

    console.log("_________________________________________________");
    console.log("");
}

