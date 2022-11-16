import { Type } from "../models";
import { TypePipe } from "./type.pipe";

describe('TypePipe', () => {
  let pipe = new TypePipe();

  it('should return 📕', () => {
    expect(pipe.transform(Type.BOOK)).toEqual("📕");
  });

  it("should return 💊", () => {
    expect(pipe.transform(Type.MEDECINE)).toEqual("💊");
  });

  it("should return 🍔", () => {
    expect(pipe.transform(Type.FOOD)).toEqual("🍔");
  });

  it("should return ❓", () => {
    expect(pipe.transform(Type.OTHER)).toEqual("❓"); 
  });
});