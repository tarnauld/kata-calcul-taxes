import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ResultComponent } from "./result.component";

describe("ResultComponent", () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let mock = jasmine.createSpy();

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent],
      imports: [MatDialogModule],
      providers: [{provide: MatDialogRef, useValue: mock}],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
