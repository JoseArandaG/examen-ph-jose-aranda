import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetallesAvisoComponent } from './detalles-aviso.component';

describe('DetallesAvisoComponent', () => {
  let component: DetallesAvisoComponent;
  let fixture: ComponentFixture<DetallesAvisoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DetallesAvisoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
