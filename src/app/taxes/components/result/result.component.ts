import { Component, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Input as DataInput } from "../../models/";
import { TaxesService } from "../../services/taxes.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"],
})
export class ResultComponent {
  displayedColumns: string[] = ["description", "total"];

  constructor(
    private taxesService: TaxesService,
    public dialogRef: MatDialogRef<ResultComponent>,
    @Inject(MAT_DIALOG_DATA) public datas: any
  ) {}

  getAmountForInput(input: DataInput): number {
    return this.taxesService.nearest5Cents(
      input.unityPrice * input.quantity +
        this.taxesService.computeTaxeForInput(input)
    );
  }
}
