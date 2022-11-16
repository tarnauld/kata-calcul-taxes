import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormComponent } from "./form.component";

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be empty array', () => {
    expect(component.datas).toEqual([]);
  });
});