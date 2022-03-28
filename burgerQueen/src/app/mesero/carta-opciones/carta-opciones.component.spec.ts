import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaOpcionesComponent } from './carta-opciones.component';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { RouterTestingModule } from '@angular/router/testing';

describe('CartaOpcionesComponent', () => {
  let component: CartaOpcionesComponent;
  let fixture: ComponentFixture<CartaOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule,
      ],
      providers: [
        AngularFireAuth,
      ],
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
