import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgregarAvisoComponent } from './agregar-aviso.component';

describe('AgregarAvisoComponent', () => {
  let component: AgregarAvisoComponent;
  let fixture: ComponentFixture<AgregarAvisoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AgregarAvisoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
