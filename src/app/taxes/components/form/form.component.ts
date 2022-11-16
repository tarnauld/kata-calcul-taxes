import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  OnInit,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTable } from "@angular/material/table";
import { Input as DataInputs, Type } from "../../models";
import { TaxesService } from "../../services/taxes.service";
import { ResultComponent } from "../result/result.component";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  @Input("datas") datas: Array<DataInputs> | undefined;
  @ViewChild(MatTable) table: MatTable<any> | undefined;
  custom: boolean = false;

  displayedColumns: string[] = [
    "description",
    "quantity",
    "unityPrice",
    "type",
    "imported",
  ];

  constructor(
    public ref: ChangeDetectorRef,
    public dialog: MatDialog,
    private taxesService: TaxesService
  ) {}

  ngOnInit(): void {
    this.custom = this.datas?.length === 0;
  }

  updateField(e: any, el: any, field: string) {
    el[field] = e.srcElement.value;
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ResultComponent, {
      width: "100%",
      height: "90%",
      data: this.taxesService.computeBill(this.datas!),
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  addField() {
    this.datas?.push({
      description: "",
      imported: false,
      quantity: 0,
      type: Type.OTHER,
      unityPrice: 0,
    });
    this.ref.detectChanges();
    this.table!.renderRows();
  }
}
