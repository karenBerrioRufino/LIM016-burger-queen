import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
// import { createUsersService } from 'src/app/services/create-users.service';
import { environment } from 'src/environments/environment';

import { GestionUsuariosComponent } from './gestion-usuarios.component';
describe('GestionUsuariosComponent', () => {

  let component: GestionUsuariosComponent;
  let fixture: ComponentFixture<GestionUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        GestionUsuariosComponent,
      ],
      imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig),
        // AngularFirestoreModule,
      ],
      providers:[
        // AngularFirestore,
        // AngularFireAuth,
        FormBuilder,
        // ReactiveFormsModule,
        // createUsersService,
        AuthService,
      ]
    })
    .compileComponents();

  });

  


  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/compat/firestore';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { GestionUsuariosComponent } from './gestion-usuarios.component';
// import { environment } from 'src/environments/environment';


// describe('AppComponent', () => {
//   beforeEach((() => {
//     TestBed.configureTestingModule({
//       imports: [
//         AngularFireModule.initializeApp(environment.firebaseConfig),  
//         ReactiveFormsModule, 
         
//       ],
//       providers: [
//         AngularFireAuth,
//         FormBuilder,
//         AngularFirestore,
//         AngularFirestoreModule,
        
//       ],
//       declarations: [
//         GestionUsuariosComponent
//       ],
//     }).compileComponents();
//   }));
// })
// describe('GestionUsuariosComponent', () => {
//   let component: GestionUsuariosComponent;
//   let fixture: ComponentFixture<GestionUsuariosComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ GestionUsuariosComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(GestionUsuariosComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
// function initializeApp(firebaseConfig: { apiKey: string; authDomain: string; projectId: string; storageBucket: string; messagingSenderId: string; appId: string; measurementId: string; }): import("@firebase/app").FirebaseApp {
//   throw new Error('Function not implemented.');
// }