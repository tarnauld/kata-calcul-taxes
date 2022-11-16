import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Input as DataInputs } from "../../models";
import { TaxesService } from "../../services/taxes.service";
import { ResultComponent } from "../result/result.component";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  @Input("datas") datas: Array<DataInputs> = [];
  displayedColumns: string[] = [
    "description",
    "quantity",
    "unityPrice",
    "type",
    "imported",
  ];

  constructor(public dialog: MatDialog, private taxesService: TaxesService) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ResultComponent, {
      width: "100%",
      height: "90%",
      data: this.taxesService.computeBill(this.datas),
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
