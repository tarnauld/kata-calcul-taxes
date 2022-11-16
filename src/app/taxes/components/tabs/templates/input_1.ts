import { Input, Type } from "src/app/taxes/models";

export const input1: Array<Input> = [
  {
    description: "livres",
    quantity: 2,
    type: Type.BOOK,
    unityPrice: 12.49,
    imported: false,
  },
  {
    description: "CD musical",
    quantity: 1,
    type: Type.OTHER,
    unityPrice: 14.99,
    imported: false,
  },
  {
    description: "barres de chocolat",
    quantity: 3,
    type: Type.FOOD,
    unityPrice: 0.85,
    imported: false,
  },
];
