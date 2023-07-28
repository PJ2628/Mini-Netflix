import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasTipoComponent } from './cuentas-tipo.component';

describe('CuentasTipoComponent', () => {
  let component: CuentasTipoComponent;
  let fixture: ComponentFixture<CuentasTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentasTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
