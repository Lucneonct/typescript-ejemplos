import { getUsuario } from "../Clase 1/functions";
import { IUsuario } from "../Clase 1/types";
import { usuario } from "../Clase 1";
import { OnlyRequired } from "../Clase 4";

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
    return currentUser;
  }

  static update(currentUser: IUsuario, updatedUser: Partial<IUsuario>) {}
  
  static updateAll(currentUser: IUsuario, updatedUser: Required<IUsuario>) {}

  /**
   * Update the user data passing only the new data
   * @param currentUser User to be modified
   * @param updatedUser New user data
   */
  static updateObservactions(currentUser: IUsuario, updatedUser: OnlyRequired<IUsuario, "observaciones" | "nombre" | "edad">) {}
}


User.updateName(usuario, { nombre: "Alberto" })
User.update(usuario, { nombre: "Alberto" })
User.updateAll(usuario, { nombre: "Alberto", edad: 30, esProgramador: false, observaciones: "" })
User.updateObservactions(usuario, { observaciones: "Todo bien!", nombre: "Alberto", edad: 35 })

interface IStatusItem {
  code: string,
  name: string
}

export interface IStatuses {
  [key: string]: IStatusItem
}

export const batchItemStatuses = {
  PENDING: {
    code: "PEN",
    name: "Pending"
  } as const,
  UNDER_CONSTRUCTION: {
    code: "UCO",
    name: "Under Construction"
  } as const,
  APPROVED: {
    code: "APP",
    name: "Approved"
  } as const,
  REJECTED: {
    code: "RJT",
    name: "Rejected"
  } as const,
} satisfies IStatuses

type TBatchItemStatuses = typeof batchItemStatuses;
export type TBatchItemStatusCodes = TBatchItemStatuses[keyof TBatchItemStatuses]['code'];


export const medicineStatuses = {
  EDITED: {
    code: "EDT",
    name: "Edited"
  } as const,
  UNDER_CONSTRUCTION: {
    code: "UCO",
    name: "Under Construction"
  } as const,
  VALID: {
    code: "VAL",
    name: "Valid"
  } as const,
} satisfies IStatuses

type TMedicineStatuses = typeof medicineStatuses;
export type TMedicineStatusCodes = TMedicineStatuses[keyof TMedicineStatuses]['code'];


type GetStatusesCodes<T extends IStatuses = typeof medicineStatuses> = T[keyof T]["code"];

type TMedicineStatusCodesWithGeneric = GetStatusesCodes<typeof medicineStatuses>;
type TBatchItemStatusCodesWithGeneric = GetStatusesCodes<typeof batchItemStatuses>;
type TRandomStatusCode = GetStatusesCodes;


batchItemStatuses.UNDER_CONSTRUCTION.code;

type TCoords = [x: number, y: number];
const coords: TCoords = [1.123123, -5.123123];

function calculateCoords(...args: TCoords) {
  /** Something */
}

calculateCoords(5, 2);
calculateCoords(...coords);