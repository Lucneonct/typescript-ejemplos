import { getUsuario } from "../Clase 1/functions";
import { IUsuario } from "../Clase 1/types";
import { usuario } from "../Clase 1";

const user = await getUsuario();

switch(typeof user) {
  case "boolean":
    user;
    break;
  default:
    user;
    break;
}


// FORMULARIO DE ACTUALIZACIÓN
class User {
  // { nombre: "Alberto" }
  static updateName(currentUser: IUsuario, updatedUser: Pick<IUsuario, "nombre">) {
    currentUser = { ...currentUser, ...updatedUser }
  }

  static update(currentUser: IUsuario, updatedUser: Partial<IUsuario>) {}
  
  static updateAll(currentUser: IUsuario, updatedUser: Required<IUsuario>) {}

  /**
   * Update the user data passing only the new data
   * @param currentUser User to be modified
   * @param updatedUser New user data
   */
  static updateObservactions(currentUser: IUsuario, updatedUser: Pick<Required<IUsuario>, "observaciones"> & Partial<IUsuario>) {}
}


User.updateName(usuario, { nombre: "Alberto" })
User.update(usuario, { nombre: "Alberto" })
User.updateAll(usuario, { nombre: "Alberto", edad: 30, esProgramador: false, observaciones: "" })
User.updateObservactions(usuario, { observaciones: "Todo bien!", nombre: "Alberto" })

interface IStatusItem {
  code: string,
  name: string
}

interface IStatuses {
  [key: string]: IStatusItem
}

export const batchItemStatuses = {
  PENDING: {
    code: "PEN",
    name: "Pending"
  },
  UNDER_CONSTRUCTION: {
    code: "UCO",
    name: "Under Construction"
  },
  APPROVED: {
    code: "APP",
    name: "Approved"
  },
} satisfies IStatuses

batchItemStatuses.UNDER_CONSTRUCTION;

type TCoords = [x: number, y: number];
const coords: TCoords = [1.123123, -5.123123];

function calculateCoords(...args: TCoords) {
  /** Something */
}

calculateCoords(5, 2);
calculateCoords(...coords);