import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaAvisoComponent } from './lista-aviso.component';

describe('ListaAvisoComponent', () => {
  let component: ListaAvisoComponent;
  let fixture: ComponentFixture<ListaAvisoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListaAvisoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
