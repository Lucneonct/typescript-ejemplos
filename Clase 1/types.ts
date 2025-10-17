export type TTitle = "Desempleado" | "Pensionado" | "Jubilado";
export type TVerifarmaWorkerTitle = ETitle;

export interface IUsuario {
  nombre: string;
  edad: number;
  esProgramador: boolean;
  observaciones?: string;
  /*...*/
}

export interface IFootballPlayer extends IUsuario {
  altura: number;
}

export interface IVerifarmaWorker extends IUsuario {
  legajo: number;
  titulo: TVerifarmaWorkerTitle; // Developer / dev / desarrollador / programador / developer
}

const MY_CONSTANTS = {
  RUTINA: "rutina",
  CAPACITACIONES: "capacitaciones"
}

export enum ETitle {
  DESARROLLADOR = "dev",
  PENSIONADO = "pen",
  MARKETING = "mar"
}