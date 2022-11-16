import { Input, Type } from "src/app/taxes/models";

export const input2: Array<Input> = [
  {
    description: "boites de chocolats",
    quantity: 2,
    type: Type.FOOD,
    unityPrice: 10,
    imported: true,
  },
  {
    description: "flacons de parfum",
    quantity: 3,
    type: Type.OTHER,
    unityPrice: 47.5,
    imported: true,
  },
];
