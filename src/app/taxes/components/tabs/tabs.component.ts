import { Component } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent {
  tabs = [{
    title: "Input #1",
    child: 'Input #1'
  }, {
    title: "Input #2",
    child: 'Input #2'
  }, {
    title: "Input #3",
    child: 'Input #3'
  }, {
    title: "Custom",
    child: 'Custom'
  }]
}
