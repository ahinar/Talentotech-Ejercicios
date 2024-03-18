/*Calculadora basica: Realiza un script que muestre por pantalla un menú (utiliza console.log()); Pulse 1 para sumar Pulse 2 para restar Pulse 3 para multiplicar Pulse 4 para dividir Pulse 5 para obtener el módulo Pulse 6 para salir En función de la opción seleccionada realizará la o peración y si pulsa la opción 6, con el botón confirm preguntar si está seguro de salir, si es que si cerrará la ventana si es que no, se volverá a elegir una opción del menú.*/

function menu() {
  console.log("-------MENU------");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. multiplicar");
  console.log("4. Dividir");
  console.log("5. Modulo o Residuo");
  console.log("6. Salir");
}

function opcion() {
  let opcion = parseInt(prompt("ingrese una opcion"));
  if (opcion == 1) {
    suma();
  } else if (opcion === 2) {
    resta();
  } else if (opcion === 3) {
    multiplicacion();
  } else if (opcion === 4) {
    division();
  } else if (opcion === 5) {
    modulo();
  } else if (opcion === 6) {
    salir();
  } else {
    console.log("Opción inválida");
    inicial();
}
}

function suma() {
  let nume1 = parseInt(prompt("Ingrese un numero"));
  let nume2 = parseInt(prompt("ingrese otro numero"));
  alert(`El resultado es ${nume1 + nume2}`);
  inicial();
}

function resta() {
  let nume1 = parseInt(prompt("Ingrese un numero"));
  let nume2 = parseInt(prompt("ingrese otro numero"));
  alert(`El resultado es ${nume1 - nume2}`);
  inicial();
}

function multiplicacion() {
  let nume1 = parseInt(prompt("Ingrese un numero"));
  let nume2 = parseInt(prompt("ingrese otro numero"));
  alert(`El resultado es ${nume1 * nume2}`);
  inicial();
}

function division() {
  let nume1 = parseInt(prompt("Ingrese un numero"));
  let nume2 = parseInt(prompt("ingrese otro numero"));
  alert(`El resultado es ${nume1 / nume2}`);
  inicial();
}

function modulo() {
  let nume1 = parseInt(prompt("Ingrese un numero"));
  let nume2 = parseInt(prompt("ingrese otro numero"));
  alert(`El resultado es ${nume1 % nume2}`);
  inicial();
}

function salir() {
    let respuesta = prompt("¿Está seguro de salir? (y/n)");
    if (respuesta === 'y') {
      alert("Adiós");
    } else if (respuesta === 'n') {
      inicial();
    } else {
      alert("Por favor, seleccione una opción válida.");
      salir();
    }
}
function inicial() {
  menu();
  opcion();
}

inicial();
