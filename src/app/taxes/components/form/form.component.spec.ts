import { ChangeDetectorRef } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatTable, MatTableModule } from "@angular/material/table";
import { DescriptionPipe } from "../../pipes/description.pipe";
import { TypePipe } from "../../pipes/type.pipe";
import { ResultComponent } from "../result/result.component";
import { FormComponent } from "./form.component";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const mock = {
    open: jasmine.createSpy().and.returnValue(() => {}),
  };
  const ref = {
    detectChanges: jasmine.createSpy().and.returnValue(() => {}),
  };

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, ResultComponent, DescriptionPipe, TypePipe],
      imports: [MatDividerModule, MatDialogModule, MatTableModule],
      providers: [
        { provide: MatDialog, useValue: mock },
        { provide: ChangeDetectorRef, useValue: ref },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    component.datas = [];
    fixture.detectChanges();
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

  it("should add fields", () => {
    component.addField();
    expect(component.datas?.length).toEqual(1);
    component.addField();
    expect(component.datas?.length).toEqual(2);
    component.addField();
    expect(component.datas?.length).toEqual(3);
  });
});
