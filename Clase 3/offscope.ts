import { calcular, TCalcularResult } from ".";

function mostrarResultado(resultado: TCalcularResult) {
  if(resultado === "No existe") return;
  
  console.log(resultado * 2);
}

const resultado = calcular(5, 15, "+");
mostrarResultado(resultado);