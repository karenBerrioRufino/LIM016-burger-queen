import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPedidosCocineroComponent } from './total-pedidos-cocinero.component';

describe('TotalPedidosCocineroComponent', () => {
  let component: TotalPedidosCocineroComponent;
  let fixture: ComponentFixture<TotalPedidosCocineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPedidosCocineroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPedidosCocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
