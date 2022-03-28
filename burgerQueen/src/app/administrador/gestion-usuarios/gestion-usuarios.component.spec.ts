import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { createUsersService } from 'src/app/services/create-users.service';
import { environment } from 'src/environments/environment';

import { GestionUsuariosComponent } from './gestion-usuarios.component';
describe('GestionUsuariosComponent', () => {

  let component: GestionUsuariosComponent;
  let fixture: ComponentFixture<GestionUsuariosComponent>;
  let serviceauth: AuthService;
  let servicefirestore: AngularFirestore;
  let servicecreateuser: createUsersService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        GestionUsuariosComponent,
        AngularFireModule.initializeApp(environment.firebaseConfig)

      ],
      providers:[
        AngularFirestoreModule,
        AngularFireAuth,
        FormBuilder,
        ReactiveFormsModule,
        
      ]
    })
    .compileComponents();
    serviceauth = TestBed.inject(AuthService)
    servicecreateuser=TestBed.inject(createUsersService)
    // TestBed.inject(FormBuilder)
    servicefirestore= TestBed.inject(AngularFirestore)
  });

  


  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
