import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioAvisoPage } from './formulario-aviso.page';

describe('FormularioAvisoPage', () => {
  let component: FormularioAvisoPage;
  let fixture: ComponentFixture<FormularioAvisoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAvisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
