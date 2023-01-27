let precio = prompt("Ingrese el monto a pagar en cuotas");
// let cuotas = number(prompt(
//   " Eliga la opcion de para la cantidad de cuotas: \n 1. 3 Cuotas - recargo 5% \n 2. 6 Cuotas - recargo 10% \n 3. 12 Cuotas - recargo 20% \n 4. 18 Cuotas - recargo 40% \n 5. Salir"
// ));

do {
  let cuotas = Number(
    prompt(
      " Eliga la opcion de para la cantidad de cuotas: \n 1. 3 Cuotas - recargo 5% \n 2. 6 Cuotas - recargo 10% \n 3. 12 Cuotas - recargo 20% \n 4. 18 Cuotas - recargo 40% \n 5. Salir"
    )
  );
  switch (cuotas) {
    case 1:
      cuota3();
      break;
    case 2:
      cuota6();
      break;
    case 3:
      cuota12();
      break;
    case 4:
      cuota18();
      break;
    case 5:
    default:
      alert("dato invalido");
      break;
  }
} while (cuotas != 5);

function cuota3() {
  let recargo = precio * 1.05;
  let cuota = recargo / 3;
  var precioFinal = recargo.toFixed(2);
  var cuotaFinal = cuota.toFixed(2);
  alert(
    " El precio final es $" +
      precioFinal +
      " el precios de cada cuota es de $" +
      cuotaFinal
  );
}

function cuota6() {
  let recargo = precio * 1.1;
  let cuota = recargo / 6;
  var precioFinal = recargo.toFixed(2);
  var cuotaFinal = cuota.toFixed(2);
  alert(
    " El precio final es $" +
      precioFinal +
      " el precios de cada cuota es de $" +
      cuotaFinal
  );
}

function cuota12() {
  let recargo = precio * 1.2;
  let cuota = recargo / 12;
  var precioFinal = recargo.toFixed(2);
  var cuotaFinal = cuota.toFixed(2);
  alert(
    " El precio final es $" +
      precioFinal +
      " el precios de cada cuota es de $" +
      cuotaFinal
  );
}

function cuota18() {
  let recargo = precio * 1.4;
  let cuota = recargo / 18;
  var precioFinal = recargo.toFixed(2);
  var cuotaFinal = cuota.toFixed(2);
  alert(
    " El precio final es $" +
      precioFinal +
      " el precios de cada cuota es de $" +
      cuotaFinal
  );
}
