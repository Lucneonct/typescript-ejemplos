import axios from "axios";
import { TBatchItemStatusCodes } from "../Clase 2";

type TOperationType = "*" | "/" | "+" | "-" | "**"

export function calcular(val1: number, val2: number, operation: TOperationType) {
  switch(operation) {
    case "*":
      return (val1 * val2);
    case "/":
      return (val1 / val2);
    case "+":
      return (val1 + val2);
    case "-":
      return (val1 - val2);
    default:
      return "No existe"
  }
}

export type TCalcularResult = ReturnType<typeof calcular>;

const myRespuestaUnknown: unknown = await axios.get('//')
const myRespuestaAny: any = await axios.get('//')

myRespuestaAny.nombre.split(" ")[0];

if(typeof myRespuestaUnknown == "object" && myRespuestaUnknown && "nombre" in myRespuestaUnknown) {
  if(myRespuestaUnknown.nombre === "string") {
    myRespuestaUnknown.nombre.split(" ")[0];
  }
}


const num1: any = await axios.get('//')

function isNumber(num: any): num is number {
  return typeof num === "number" || typeof num === "bigint";
}

if(isNumber(num1)) {
  console.log(num1 * 2)
}

function isValidCode<C extends string = string>(code: C) {
  return ["PEN", "UCO"].includes(code);
}