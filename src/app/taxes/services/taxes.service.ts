import { Injectable } from "@angular/core";
import { Input, Output, Type } from "../models";

@Injectable({
  providedIn: "root",
})
export class TaxesService {
  constructor() {}

  private round(a: number): number {
    return Math.round(a * 100) / 100;
  }

  private nearest5Cents(n: number): number {
    return parseFloat((Math.ceil(n * 20) / 20).toFixed(2));
  }

  private computeTotalAmount(inputs: Array<Input>, taxes: number): number {
    return (
      inputs
        .map((input) => input.quantity * input.unityPrice)
        .reduce((acc: number, value: number): number => acc + value, taxes)
    );
  }

  private computeTaxeForInput(input: Input): number {
    let taxeForProduct = 0;

    switch (input.type) {
      case Type.FOOD:
      case Type.MEDECINE:
        break;
      case Type.BOOK:
        taxeForProduct =
          this.nearest5Cents(input.unityPrice * 0.1) * input.quantity;
        break;
      default:
        taxeForProduct =
          this.nearest5Cents(input.unityPrice * 0.2) * input.quantity;
        break;
    }

    taxeForProduct += input.imported
      ? this.nearest5Cents(input.quantity * (input.unityPrice * 0.05))
      : 0;

    return taxeForProduct;
  }

  private computeTotalTaxes(inputs: Array<Input>): number {
    return inputs
      .map((input) => this.computeTaxeForInput(input))
      .reduce((acc: number, value: number) => acc + value, 0);
  }

  public computeBill(inputs: Array<Input>): Output {
    const taxesAmount: number = this.computeTotalTaxes(inputs);
    const totalAmount: number = this.computeTotalAmount(inputs, taxesAmount);

    return {
      inputs: inputs,
      taxesAmount: taxesAmount,
      totalAmount: this.round(totalAmount),
    };
  }
}
