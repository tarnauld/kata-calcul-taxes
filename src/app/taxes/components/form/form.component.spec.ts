import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { ResultComponent } from "../result/result.component";
import { FormComponent } from "./form.component";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let mock = {
    open: jasmine.createSpy().and.returnValue(() => {}),
  };

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, ResultComponent],
      imports: [MatDividerModule, MatDialogModule],
      providers: [{ provide: MatDialog, useValue: mock }],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  it("should be empty array", () => {
    expect(component.datas).toEqual([]);
  });

  it("should open dialog", () => {
    component.openDialog("", "");
    expect(mock.open).toHaveBeenCalled();
  });
});
