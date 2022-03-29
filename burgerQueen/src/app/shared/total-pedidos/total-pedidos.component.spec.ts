import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPedidosComponent } from './total-pedidos.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { RouterTestingModule } from '@angular/router/testing';

describe('TotalPedidosComponent', () => {
  let component: TotalPedidosComponent;
  let fixture: ComponentFixture<TotalPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AngularFireAuth,
      ],
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
