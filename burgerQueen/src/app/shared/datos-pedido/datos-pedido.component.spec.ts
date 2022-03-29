import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPedidoComponent } from './datos-pedido.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { RouterTestingModule } from '@angular/router/testing';
import { ClockService } from 'src/app/services/clock.service';



describe('DatosPedidoComponent', () => {
  let component: DatosPedidoComponent;
  let fixture: ComponentFixture<DatosPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule,
      ],
      providers: [
        AngularFireAuth,
        ClockService
      ], 
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
