// Ejercicio 1: Calcular el área de un rectángulo

/* Teniendo presente que el área de un rectángulo es base * altura
y también que se pide una función que devuelva el resultado
se ha pensado que la misma reciba ambos parámentos, en este caso pasados
desde el mismo código y que la misma sea llamada de diferentes console.log
para mostrar por consola su retorno */

function areaRectangulo(base, altura) {
    return base * altura;
}
let base, altura;

console.log("Solución 1:");
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

// Ejercicio 2: Contar palabras en una cadena

/* Teniendo presente que pide "devolver" se empleará una función que retorne 
la cantidad de palabras de la cadena y se muestro por consola por fuera de la función.
Se empleará trim para descartar espacion al inicio y al final de la cadena.
Se sumará un espacio al final de la cadena para prepararla a los efectos lógicos del control
Se recorrerá la cadena contando los cambios de caracter distinto de " " a caracter igual a " ". */

function contarPalabras(cadena) {
    cadena = cadena.trim();
    cadena = cadena + ' ';
    let palabras = 0;
    for (let i = 0; i < cadena.length - 1; i++) {
        if (cadena[i] != ' ' && cadena[i + 1] == ' ') {
            palabras += 1;
        }
    }
    return palabras;
}

console.log("Solución 2:");
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
