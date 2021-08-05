/* Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 10 millones 
	el descuento es del 15% con menor cantidad no hay descuento.
	Informar si hubo descuento de cuanto fue y el importe final con descuento */

function mostrar() {
  let origen,
    cantidad,
    costo,
    respuesta,
    flagMenosCantidadVac = 1,
    menorCantidadVac,
    origenMenorCantVac,
    totalVuelos = 0,
    vuelosOccidente = 0,
    promedioVuelosOcc,
    acumTotalVacunas = 0,
    totalCostos = 0,
    costoConDesc;

  do {
    origen = prompt(
      "Escriba el origen: oriente / occidente / secreto"
    ).toLowerCase();
    while (
      origen != "oriente" &&
      origen != "occidente" &&
      origen != "secreto"
    ) {
      origen = prompt(
        "ERROR. Escriba el origen: or oriente / oc occidente / s secreto"
      ).toLowerCase();
    }

    cantidad = parseInt(
      prompt("Ingrese la cantidad de vacunas( entre 500000 y 2500000)")
    );
    while (!(cantidad >= 500000 && cantidad <= 2500000)) {
      cantidad = parseInt(
        prompt("ERROR. Ingrese la cantidad de vacunas( entre 500000 y 2500000)")
      );
    }

    costo = parseFloat(
      prompt("Ingrese el costo del vuelo en millones (entre 1 y 5")
    );
    while (!(costo >= 1 && costo <= 5)) {
      costo = parseFloat(
        prompt("ERROR. Ingrese el costo del vuelo en millones (entre 1 y 5")
      );
    }

    //a- El origen que envió menor cantidad de vacunas
    if (flagMenosCantidadVac || cantidad < menorCantidadVac) {
      flagMenosCantidadVac = 0;
      menorCantidadVac = cantidad;
      origenMenorCantVac = origen;
    }
    //b- El promedio por vuelo de vacunas llegadas de Occidente
    if (origen == "occidente") {
      vuelosOccidente++;
    }
    //Cuento el total de vuelos y vacunas
    totalVuelos++;
    acumTotalVacunas = +cantidad;
    //C- Calculo el costo total
    totalCostos += costo;

    respuesta = prompt("Escriba s si quiere agregar mas vacunas");
  } while (respuesta == "s");

  console.log(
    "A- El origen del vuelo con menos vacunas es de " + origenMenorCantVac
  );

  //b- El promedio por vuelo de vacunas llegadas de Occidente
  promedioVuelosOcc = (vuelosOccidente * 100) / totalVuelos;
  console.log(
    "B- El promedio de vuelos de Occidente es de " +
      promedioVuelosOcc.toFixed(2) +
      "%"
  );

  //c- El total sin descuentos a pagar por los gastos de los viajes
  console.log("C- El importe bruto a pagar es de " + totalCostos + "millones");

  /* d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 10 millones 
	el descuento es del 15% con menor cantidad no hay descuento.
	Informar si hubo descuento de cuanto fue y el importe final con descuento */

  if (acumTotalVacunas > 10000000) {
    costoConDesc = totalCostos * 0.75;
    console.log(
      "D- Por la cantidad comprada obtine un descuento y va a pagar " +
        costoConDesc +
        "millones"
    );
  } else if (acumTotalVacunas > 5000000) {
    console.log(
      "D- Por la cantidad comprada obtine un descuento y va a pagar " +
        costoConDesc +
        "millones"
    );
  } else {
    console.log("D- No aplica ningun descuento");
  }
}
