import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPedidoComponent } from './datos-pedido.component';

describe('DatosPedidoComponent', () => {
  let component: DatosPedidoComponent;
  let fixture: ComponentFixture<DatosPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
