import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent {
  datas = [];
  displayedColumns: string[] = ["description", "total"];

  constructor(public dialogRef: MatDialogRef<ResultComponent>) {}
}
