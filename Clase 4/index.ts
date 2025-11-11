import { usuario } from "../Clase 1";
import _ from "lodash"

export type OnlyRequired<
  Type extends Record<string, any>,
  Key extends keyof Type
> = Pick<Required<Type>, Key> & Partial<Type>;

function handleTransition<From extends string, To extends string>(from: From, to: To): `${From}-${To}` {
  return `${from}-${to}`
}

type GetStatuses<T extends `${string}-${string}`> = 
  T extends `${infer From}-${infer To}` 
    ? {
      to: To,
      from: From
    } 
    : never;

function getTransition<Transition extends `${string}-${string}`>(transition: Transition): GetStatuses<Transition> {
  const [from, to] = transition // "UCO-PEN"
    .split("-"); // ["UCO", "PEN"] => from: "UCO", to: "PEN"
  
  return {
    from,
    to
  } as GetStatuses<Transition>
}

const transition = handleTransition("UCO", "PEN");

const transitions = getTransition(transition);

transitions.from === "UCO"
transitions.to === "PEN"


type SplitText<T extends `code-${string}`> = T extends `code-${infer Status}` ? Status : never
type Example = SplitText<"code-UCO">


const myObject = {
  name: "Lucas",
  work: {
    name: "Verifarma",
    role: {
      name: "Developer",
      code: "DEV"
    }
  },
  relations: [
    {
      name: "Nidia",
      role: "parent"
    }, {
      name: "Amancio",
      role: "parent"
    }
  ]
}

type ArrayIndices<T extends readonly any[]> = Exclude<keyof T, keyof any[]>;
type ObjectPaths<T> = T extends (infer U)[] ?
  `${number}` | `${number}.${ObjectPaths<U>}`
  : T extends object
  ?
  { [K in keyof T & string]:
    | `${K}`
    | `${K}.${ObjectPaths<T[K]>}`
  }[keyof T & string]
  : never;

// type ObjectPaths<T> = T extends object 
//   ? { [K in keyof T & string]: 
//     | `${K}`
//     | `${K}.${ObjectPaths<T[K]>}`
//    }[keyof T & string]
//   : never

type example = ObjectPaths<typeof myObject>
myObject["relations"][0]["name"]

const myArray = [1,"test", "eee"] as const;

type Test = ArrayIndices<typeof myArray>; // Resultado: "0" | "1" | "2"
const test: example = "relations.0.name"

function get<T extends Record<string, any>, P extends ObjectPaths<T>>(obj: T, path: P) {
  _.get(obj, path)
}