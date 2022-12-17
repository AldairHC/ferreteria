import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarLocalComponent } from './guardar-local.component';

describe('GuardarLocalComponent', () => {
  let component: GuardarLocalComponent;
  let fixture: ComponentFixture<GuardarLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
