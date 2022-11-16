import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

const components = [
  HeaderComponent,
  FooterComponent,
]

@NgModule({
  declarations: components,
  imports: [MatToolbarModule, MatIconModule],
  exports: components,
})
export class SharedModule {}
