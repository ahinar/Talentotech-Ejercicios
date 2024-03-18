/*Mostrar alerta: Crea una variable,
Crea una función que contenga una variable con el mismo nombre
que la anterior. Muestra con un alert la variable y comprueba su valor*/

let  miVariable = "Esto es una variable global";//variable global
function alerta(){
    //let miVariable = "Esto es una variable  local dentro de una funcion"; //variable local
    alert (miVariable);
}

alerta();
alert(`la variable global no ha vambiado: `+miVariable);