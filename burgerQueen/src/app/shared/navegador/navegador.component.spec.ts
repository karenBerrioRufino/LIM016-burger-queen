import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorComponent } from './navegador.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { RouterTestingModule } from '@angular/router/testing';

describe('NavegadorComponent', () => {
  let component: NavegadorComponent;
  let fixture: ComponentFixture<NavegadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule,
      ],
      providers: [
        AngularFireAuth,
      ],
      declarations: [ NavegadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
