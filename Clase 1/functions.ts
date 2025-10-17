import { IUsuario, IVerifarmaWorker } from "./types";

export function esMayorDeEdad(usuario: IUsuario) {
  return usuario.edad >= 18;
}