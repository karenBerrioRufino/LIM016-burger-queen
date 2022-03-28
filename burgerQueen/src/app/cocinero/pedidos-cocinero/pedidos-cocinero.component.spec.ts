import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCocineroComponent } from './pedidos-cocinero.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';


describe('PedidosCocineroComponent', () => {
  let component: PedidosCocineroComponent;
  let fixture: ComponentFixture<PedidosCocineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        AngularFireAuth,
      ],
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
