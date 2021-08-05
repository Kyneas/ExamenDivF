/* Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna del hombre con más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada Mas usada*/

function mostrar() {
  let nombre,
    edad,
    vacuna,
    dosis,
    sexo,
    acumEdadChina = 0,
    flagJoven = 1,
    nombreMasJoven,
    edadMasJoven,
    vacunaMasJoven,
    contadorVacChina = 0,
    contadorVacAmer = 0,
    contadorVacRusa = 0,
    contadorMenoresVacAme = 0,
    promedioMenoresVacAme,
    totalVacunados,
    promEdadVacChina,
    vacunaMasInoculada,
    contadorPrimeraDosis = 0,
    promedioPrimDosis,
    respuesta;

  do {
    nombre = prompt("Ingrese su nombre (entre 3 y 10 caracteres)");
    while (!(nombre.length >= 3 && nombre.length <= 12)) {
      nombre = prompt("ERROR. Ingrese su nombre (entre 3 y 10 caracteres)");
    }

    edad = parseInt(prompt("Ingrese la edad (Mayor o igual a 12"));
    while (isNaN(edad) || edad < 12) {
      edad = parseInt(prompt("ERROR.Ingrese la edad (Mayor o igual a 12"));
    }

    vacuna = prompt(
      "Ingrese la vacuna: Rusa / Americana (De 12 a 17 años) / China"
    ).toLowerCase();
    while (
      (edad >= 12 && edad <= 17 && vacuna != "americana") ||
      (vacuna != "china" && vacuna != "americana" && vacuna != "rusa")
    ) {
      vacuna = prompt(
        "ERROR. ngrese la vacuna: Rusa / Americana (De 12 a 17 años) / China"
      ).toLowerCase();
    }

    dosis = prompt(
      "Ingrese la dosis: p para la primera / s para la segunda"
    ).toLowerCase();
    while (dosis != "p" && dosis != "s") {
      dosis = prompt(
        "ERROR. Ingrese la dosis: p para la primera / s para la segunda"
      ).toLowerCase();
    }

    sexo = prompt("Ingrese sexo: f / m").toLowerCase();
    while (sexo != "f" && sexo != "m") {
      sexo = prompt("ERROR. Ingrese sexo: f / m").toLowerCase();
    }

    switch (vacuna) {
      case "americana":
        if (edad < 18) {
          contadorMenoresVacAme++;
        }
        contadorVacAmer++;
        break;
      case "china":
        contadorVacChina++;
        acumEdadChina += edad;
        break;
      case "rusa":
        contadorVacRusa++;
        break;
    }
    //B- Vacunado mas joven
    if (sexo != "m" && (flagJoven || edad < edadMasJoven)) {
      flagJoven = 0;
      nombreMasJoven = nombre;
      edadMasJoven = edad;
      vacunaMasJoven = vacuna;
    }
    //D- Cuento cuantas personas se dieron la 1er dosis
    if (dosis == "p") {
      contadorPrimeraDosis++;
    }
    respuesta = prompt("Escriba la leta s para agregar mas personas");
  } while (respuesta == "s");

  totalVacunados = contadorVacAmer + contadorVacChina + contadorVacRusa;

  promEdadVacChina = acumEdadChina / contadorVacChina;

  if (contadorVacChina != 0) {
    console.log(
      "A- El promedio de edad de los que se vacunaron con la vacuna China es de " +
        promEdadVacChina
    );
  } else {
    console.log("A-Nadie se vacuno con la China");
  }
  console.log(
    "B- El hombre mas joven vacunado es " +
      nombreMasJoven +
      " con la vacuna " +
      vacunaMasJoven
  );

  promedioMenoresVacAme = (contadorMenoresVacAme * 100) / contadorVacAmer;
  if (contadorMenoresVacAme != 0) {
    console.log(
      "C- El promedio de los menores que se dieron la vacuna Americana es " +
        promedioMenoresVacAme.toFixed(2) +
        "%"
    );
  } else {
    console.log("C- No hubo menores que se dieron la vacuna Americana");
  }
  promedioPrimDosis = (contadorPrimeraDosis * 100) / totalVacunados;
  if (contadorPrimeraDosis != 0) {
    console.log(
      "D- El promedio de las personas que se dieron la 1er dosis es " +
        promedioPrimDosis.toFixed(2) +
        "%"
    );
  } else {
    console.log("D- No hay vacunados con la 1er dosis");
  }

  //E- Verifico la vacuna mas inoculada
  if (contadorVacAmer > contadorVacChina && contadorVacAmer > contadorVacRusa) {
    vacunaMasInoculada = "Americana";
  } else if (
    contadorVacRusa >= contadorVacAmer &&
    contadorVacRusa > contadorVacChina
  ) {
    vacunaMasInoculada = "Rusa";
  } else {
    vacunaMasInoculada = "China";
  }
  console.log("E- La vacuna mas inoculada es la " + vacunaMasInoculada);
}
