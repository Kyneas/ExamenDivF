/* El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta */

function mostrar() {
  let nacionalidad,
    resultado,
    edad,
    cepa,
    contadorAlfa = 0,
    contadorBeta = 0,
    contadorDelta = 0,
    flagArgContagiadoJoven = 1,
    edadArgContagiadoJoven,
    contadorPositivos = 0,
    contadorNegativos = 0,
    contadorExtranjDelta = 0,
    porcentajePositi,
    porcentajeNegat,
    cepaMenosEncontrada;

  for (let i = 0; i < 8; i++) {
    nacionalidad = prompt(
      "Ingrese su nacionalidad: A para Argentina / E para Extranjero"
    ).toLowerCase();
    while (nacionalidad != "a" && nacionalidad != "e") {
      nacionalidad = prompt(
        "ERROR. Ingrese su nacionalidad: A para Argentina / E para Extranjero"
      ).toLowerCase();
    }

    resultado = prompt(
      "Ingrese el resultado: p para positivo / n para negativo"
    ).toLowerCase();
    while (resultado != "p" && resultado != "n") {
      resultado = prompt(
        "Ingrese el resultado: p para positivo / n para negativo"
      ).toLowerCase();
    }

    edad = parseInt(prompt("Ingrese su edad(Entre 18 y 65)"));
    while (!(edad >= 18 && edad <= 65)) {
      edad = parseInt(prompt("ERROR. Ingrese su edad(Entre 18 y 65)"));
    }
    cepa = prompt(
      "Ingrese la cepa: a para alfa / b para beta / d para delta / n para ninguna"
    ).toLowerCase();
    while (
      cepa != "n" &&
      (resultado == "n" || (cepa != "a" && cepa != "b" && cepa != "d"))
    ) {
      cepa = prompt(
        "Ingrese la cepa: a para alfa / b para beta / d para delta / n para ninguna"
      ).toLowerCase();
    }

    //A y B- Cuento positivos y negativos
    if (resultado == "p") {
      contadorPositivos++;
    } else {
      contadorNegativos++;
    }

    switch (cepa) {
      case "a":
        contadorAlfa++;
        break;
      case "b":
        contadorBeta++;
        break;
      case "d":
        if (nacionalidad == "e") {
          contadorExtranjDelta++;
        }
        contadorDelta++;
        break;
    }
    //D- Busco el menor de los argentinos contagiados
    if (
      nacionalidad == "a" &&
      resultado == "p" &&
      (flagArgContagiadoJoven || edad < edadArgContagiadoJoven)
    ) {
      flagArgContagiadoJoven = 0;
      edadArgContagiadoJoven = edad;
    }
  }
  porcentajePositi = contadorPositivos * 12.5;
  porcentajeNegat = contadorNegativos * 12.5;

  console.log(
    "A- El porcentaje de las personas con resultador positivo es " +
      porcentajePositi +
      "%"
  );
  console.log(
    "B- El porcentaje de las personas con resultador negativo es " +
      porcentajeNegat +
      "%"
  );

  //C-Busco la cepa menos encontrada
  if (contadorAlfa < contadorBeta && contadorAlfa < contadorDelta) {
    cepaMenosEncontrada = "alfa";
  } else if (contadorBeta <= contadorAlfa && contadorBeta < contadorDelta) {
    cepaMenosEncontrada = "beta";
  } else {
    cepaMenosEncontrada = "delta";
  }

  console.log("C- La cepa menos encontrada es la " + cepaMenosEncontrada);

  console.log(
    "D- La edad del argentino mas joven contagiado es " + edadArgContagiadoJoven
  );

  console.log(
    "E- La cantidad de extranjeros contagiados con la variante delta es " +
      contadorExtranjDelta
  );
}
