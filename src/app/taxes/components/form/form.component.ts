import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Input as DataInputs } from "../../models";
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

  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ResultComponent, {
      width: "100%",
      height: "90%",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
