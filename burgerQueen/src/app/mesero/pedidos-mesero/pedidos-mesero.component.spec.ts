import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosMeseroComponent } from './pedidos-mesero.component';

describe('PedidosMeseroComponent', () => {
  let component: PedidosMeseroComponent;
  let fixture: ComponentFixture<PedidosMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosMeseroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
