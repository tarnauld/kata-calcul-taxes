import { Pipe, PipeTransform } from "@angular/core";
import { Type } from "../models";

@Pipe({
  name: "type"
})
export class TypePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    switch (value) {
      case Type.BOOK:
        return "📕";
      case Type.FOOD:
        return "🍔";
      case Type.MEDECINE:
        return "💊"
      default:
        return "❓"
    }
  }
}
