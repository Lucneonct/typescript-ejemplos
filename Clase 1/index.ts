import { esMayorDeEdad } from './functions';
import { ETitle, IUsuario, IVerifarmaWorker, TTitle } from './types';
import { getUsuario } from './variables.js';

class Usuario {
  nombre: string;
  edad: number;
  esProgramador: boolean;

  constructor(nombre: string, edad: number, esProgramador: boolean) {
    this.edad = edad;
    this.nombre = nombre;
    this.esProgramador = esProgramador;
  }
}


let nombre: string;
let edad: number;
let esDesarrollador: boolean;
let lenguajes: string[];
let usuario: IUsuario;

let verifarmaWorker: IVerifarmaWorker = {
  edad: 30,
  esProgramador: true,
  legajo: 123,
  nombre: "Pepito",
  titulo: ETitle.DESARROLLADOR
}

nombre = "Lucas";
edad = 30;
esDesarrollador = true;
lenguajes = ["JavaScript", "TypeScript", "Python"];

usuario = {
  edad: 99,
  nombre: "Juan",
  esProgramador: true
}

if(esMayorDeEdad(verifarmaWorker)) {
  console.log("Hello World!")
}

if(esMayorDeEdad(usuario)) {
  console.log("Hello World!")
}


async function main() {
  const usuario = await getUsuario()

  usuario.nombre = 15;
  console.log(usuario.pais);
}