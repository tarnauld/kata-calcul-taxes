import { Component } from "@angular/core";
import { Input } from "../../models";
import { input1, input2, input3 } from "./templates";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent {
  tabs = [
    {
      title: "Commande #1",
      datas: input1,
    },
    {
      title: "Commande #2",
      datas: input2,
    },
    {
      title: "Commande #3",
      datas: input3,
    },
    {
      title: "Personnalisé",
      datas: [] as Array<Input>,
    },
  ];
}
