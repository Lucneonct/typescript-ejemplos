import { IUsuario, IVerifarmaWorker } from "./types";
import axios from "axios";

export function esMayorDeEdad(usuario: IUsuario) {
  return usuario.edad >= 18;
}

export async function getUsuario(): Promise<IUsuario | false> {
  const user = await axios.get<IUsuario>('https://api.example.com/usuario');

  if(user.status !== 200) {
    return false
  }

  return user.data;
}