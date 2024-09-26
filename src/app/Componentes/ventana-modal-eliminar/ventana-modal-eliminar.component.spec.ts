import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VentanaModalEliminarComponent } from './ventana-modal-eliminar.component';

describe('VentanaModalEliminarComponent', () => {
  let component: VentanaModalEliminarComponent;
  let fixture: ComponentFixture<VentanaModalEliminarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VentanaModalEliminarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentanaModalEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
