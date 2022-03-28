import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCocineroComponent } from './pedidos-cocinero.component';

describe('PedidosCocineroComponent', () => {
  let component: PedidosCocineroComponent;
  let fixture: ComponentFixture<PedidosCocineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosCocineroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosCocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
