import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./footer.component";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [MatToolbarModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});