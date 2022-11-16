import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/shared/shared.module";
import { MatTabsModule } from "@angular/material/tabs";
import { taxesComponents } from "./taxes";

const materialModules = [MatTabsModule];

@NgModule({
  declarations: [...taxesComponents, AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
