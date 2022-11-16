import { Pipe, PipeTransform } from "@angular/core";
import { Input } from "../models";

@Pipe({
  name: "description",
})
export class DescriptionPipe implements PipeTransform {
  transform(value: Input) {
    return `${value.quantity} ${value.description}${
      value.imported ? " importé" : ""
    }`;
  }
}
