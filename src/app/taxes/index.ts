import { FormComponent } from "./components/form/form.component";
import { ResultComponent } from "./components/result/result.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { DescriptionPipe } from "./pipes/description.pipe";
import { TypePipe } from "./pipes/type.pipe";

export const taxesComponents = [
  TabsComponent,
  ResultComponent,
  FormComponent,
  TypePipe,
  DescriptionPipe,
];
