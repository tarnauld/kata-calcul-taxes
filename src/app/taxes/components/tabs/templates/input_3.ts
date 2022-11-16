import { Input, Type } from "src/app/taxes/models";

export const input3: Array<Input> = [
  {
    quantity: 2,
    type: Type.OTHER,
    unityPrice: 27.99,
    imported: true,
  },
  {
    quantity: 1,
    type: Type.OTHER,
    unityPrice: 18.99,
    imported: false,
  },
  {
    quantity: 3,
    type: Type.MEDECINE,
    unityPrice: 9.75,
    imported: false,
  },
  {
    quantity: 2,
    type: Type.FOOD,
    unityPrice: 11.25,
    imported: true,
  },
];
