import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPedidosMeseroComponent } from './total-pedidos-mesero.component';

describe('TotalPedidosMeseroComponent', () => {
  let component: TotalPedidosMeseroComponent;
  let fixture: ComponentFixture<TotalPedidosMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPedidosMeseroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPedidosMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
