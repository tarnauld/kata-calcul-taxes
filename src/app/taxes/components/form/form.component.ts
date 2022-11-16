import { Component, Input } from "@angular/core";
import { Input as DataInputs} from '../../models';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  @Input('datas') datas: Array<DataInputs> = [];
  displayedColumns: string[] = ['description', 'quantity', 'unityPrice', 'type', 'imported'];
}
