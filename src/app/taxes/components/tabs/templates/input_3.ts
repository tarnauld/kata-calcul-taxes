import { Input, Type } from "src/app/taxes/models";

export const input3: Array<Input> = [
  {
    description: "flacons de parfum",
    quantity: 2,
    type: Type.OTHER,
    unityPrice: 27.99,
    imported: true,
  },
  {
    description: "flacon de parfum",
    quantity: 1,
    type: Type.OTHER,
    unityPrice: 18.99,
    imported: false,
  },
  {
    description: "boîtes de pilules",
    quantity: 3,
    type: Type.MEDECINE,
    unityPrice: 9.75,
    imported: false,
  },
  {
    description: "boîtes de chocolat",
    quantity: 2,
    type: Type.FOOD,
    unityPrice: 11.25,
    imported: true,
  },
];
