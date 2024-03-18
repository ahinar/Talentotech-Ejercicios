/*Caracter a caracter:
Realiza un script en el que un usuario
introduzca una frase (ésta puede contener todo tipo de
caracteres), ir mostrando todos los caracteres uno a uno,
excepto si es un número que lo obviará.*/

let frase = prompt("ingresa una frase");
for (i=0; i<frase.length; i++){
    if (isNaN(frase[i])){//isNaN determina si no es numero
        console.log(frase[i]);
    }  

}