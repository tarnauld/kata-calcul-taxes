import { TestBed } from "@angular/core/testing";
import { TaxesService } from "./taxes.service";
import { Input, Type } from "../models/";

describe("Taxes services", () => {
  let service: TaxesService;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [TaxesService],
    });
    service = TestBed.inject(TaxesService);
  });

  describe("computeBill", () => {
    it("should return 0 if the array if empty", () => {
      expect(service.computeBill([])).toEqual({
        inputs: [],
        taxesAmount: 0,
        totalAmount: 0,
      });
    });

    it("should return 0", () => {
      const inputs = [
        {
          description: "nothing",
          quantity: 0,
          unityPrice: 0,
          type: Type.BOOK,
          imported: false,
        },
      ];

      expect(service.computeBill(inputs)).toEqual({
        inputs: inputs,
        taxesAmount: 0,
        totalAmount: 0,
      });
    });

    it("should compute output #1", () => {
      const inputs: Array<Input> = [
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

      expect(service.computeBill(inputs)).toEqual({
        inputs: inputs,
        taxesAmount: 5.5,
        totalAmount: 48.05,
      });
    });

    it("should compute output #2", () => {
      const inputs: Array<Input> = [
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

      expect(service.computeBill(inputs)).toEqual({
        inputs: inputs,
        taxesAmount: 36.65,
        totalAmount: 199.15,
      });
    });

    it("should compute output #3", () => {
      const inputs: Array<Input> = [
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

      expect(service.computeBill(inputs)).toEqual({
        inputs: inputs,
        taxesAmount: 18.95,
        totalAmount: 145.7,
      });
    });
  });
});
