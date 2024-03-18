/*Realiza un script que determine si la cadena de texto
que se le pide al usuario es un palíndromo, es decir,
si se lee de la misma forma desde la izquierda y desde la derecha*/

let  frase = "reconocer";

function esPalindromo(cadena){
    let i;
    for (i=0; i<Math.floor(cadena.length/2); i++){//itera la cadena hasta la mitad, con la funcion Math.floor() se utiliza en este caso para asegurarse de que obtenemos un número entero al dividir
        if (cadena[i]!=cadena[cadena.length-1-i]){// se hace la comparacion de la cadena  con su reversa
            return false;
        }
    }
   return true;
}
if (esPalindromo(frase)){
    console.log("La frase es un Palíndromo")
}else {
    console.log("La frase no  es un Palíndromo")
}
