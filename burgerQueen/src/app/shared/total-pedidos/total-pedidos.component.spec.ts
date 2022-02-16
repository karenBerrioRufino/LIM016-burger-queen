import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPedidosComponent } from './total-pedidos.component';

describe('TotalPedidosComponent', () => {
  let component: TotalPedidosComponent;
  let fixture: ComponentFixture<TotalPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
