import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosMeseroComponent } from './pedidos-mesero.component';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

describe('PedidosMeseroComponent', () => {
  let component: PedidosMeseroComponent;
  let fixture: ComponentFixture<PedidosMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        AngularFireAuth,
      ],
      declarations: [ PedidosMeseroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
