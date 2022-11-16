import { Input, Type } from "../models";
import { DescriptionPipe } from "./description.pipe";

describe("DescriptionPipe", () => {
  let pipe = new DescriptionPipe();

  it('should return "2 flacons de parfum importé"', () => {
    const input = {
      description: "flacons de parfum",
      imported: true,
      quantity: 2,
      type: Type.MEDECINE,
      unityPrice: 5.0,
    } as Input;
    const description = pipe.transform(input);
    expect(description).toEqual("2 flacons de parfum importé");
  });

  it('should return "3 boites de pilules"', () => {
    const input = {
      description: "boites de pilules",
      imported: false,
      quantity: 3,
      type: Type.MEDECINE,
      unityPrice: 5.0,
    } as Input;
    const description = pipe.transform(input);
    expect(description).toEqual("3 boites de pilules");
  });
});
