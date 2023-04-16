const montoPrestamo = document.getElementById("monto_prestamo");
const duracion = document.getElementById("duracion_prestamo");
const tasa = document.getElementById("interes_prestamo");
const cuota = document.querySelector(".prestamo_cuota");
const montoPrestado = document.querySelector(".monto_prestamo");
const total = document.querySelector(".prestamo_total");
const interes = document.querySelector(".prestamo_tasa_interes");
const submitBtn = document.querySelector(".calculadora-btn");

// Evento de "click" al botón
submitBtn.addEventListener("click", function () {
  let inputsValidos = true; // variable booleana que se inicializa en true

  while (true) {
    monto = parseFloat(montoPrestamo.value);
    if (!monto || monto <= 0) {
      alert("El monto debe ser un número mayor a cero.");
      inputsValidos = false; // si no se cumple el criterio, se cambia la variable a false
      break;
    } else {
      break;
    }
  }
  while (true) {
    plazo = parseFloat(duracion.value);
    if (!plazo || plazo <= 0) {
      alert("La duración debe ser un número mayor a cero.");
      inputsValidos = false; // si no se cumple el criterio, se cambia la variable a false
      break;
    } else {
      break;
    }
  }
  while (true) {
    tasaAnual = parseFloat(tasa.value);
    if (!tasaAnual || tasaAnual <= 0) {
      alert("La tasa de interés debe ser un número mayor a cero.");
      inputsValidos = false; // si no se cumple el criterio, se cambia la variable a false
      break;
    } else {
      break;
    }
  }

  // Condición para verificar si los inputs son válidos
  if (inputsValidos) {
    // Cálculo de la tasa mensual
    let tasaMensual = tasaAnual / 1200;

    // Cálculo de la cuota mensual
    let cuotaMensual =
      (monto * tasaMensual) / (1 - (1 + tasaMensual) ** -plazo);

    // Cálculo del total a pagar
    let totalPago = cuotaMensual * plazo;

    // Cálculo del total de intereses
    let totalInteres = totalPago - monto;

    // Actualizar los valores
    cuota.innerHTML = cuotaMensual.toFixed(2);
    montoPrestado.innerHTML = Math.floor(monto);
    total.innerHTML = totalPago.toFixed(2);
    interes.innerHTML = totalInteres.toFixed(2);

    // Crear el gráfico del préstamo
    let xValues = [`Monto prestado`, `Interés`];
    let yValues = [monto, totalInteres];
    let barColors = [`#961251`, `#000000`];

    new Chart(`graficoPrestamo`, {
      type: `pie`,
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
      },
    });
  }
});
