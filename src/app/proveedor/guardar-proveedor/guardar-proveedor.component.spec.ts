import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarProveedorComponent } from './guardar-proveedor.component';

describe('GuardarProveedorComponent', () => {
  let component: GuardarProveedorComponent;
  let fixture: ComponentFixture<GuardarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
