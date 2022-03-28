import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaOpcionesComponent } from './carta-opciones.component';

describe('CartaOpcionesComponent', () => {
  let component: CartaOpcionesComponent;
  let fixture: ComponentFixture<CartaOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
