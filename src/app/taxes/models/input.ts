import { Type } from "./";

export interface Input {
  description: string;
  quantity: number;
  unityPrice: number;
  type: Type;
  imported: boolean;
}
