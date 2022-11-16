import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Output, Type } from "../../models";
import { ResultComponent } from "./result.component";

describe("ResultComponent", () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let mock = jasmine.createSpy();
  const datas: Output = {
    inputs: [],
    taxesAmount: 0,
    totalAmount: 0
  };

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent],
      imports: [MatDialogModule],
      providers: [{provide: MatDialogRef, useValue: mock}, {provide: MAT_DIALOG_DATA, useValue: datas}],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  it("should compute total amount for input", () => {
    const result = component.getAmountForInput({
      description: "",
      imported: false,
      quantity: 2,
      type: Type.FOOD,
      unityPrice: 2
    });
    expect(result).toEqual(4);
  });
});
