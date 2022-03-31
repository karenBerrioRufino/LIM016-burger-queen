import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        
      ],
      providers: [
        AngularFireAuth,
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Probar la función register que debe crear una cuenta', (done: DoneFn) => { 
    service.register("karen@gmail.com", "12345678").then(value =>{
      expect(value).toEqual(value);
      done();
    });    
});

  it('Probar la función login que debe ingresar a la cuenta creada', (done: DoneFn) => { 
    service.login("karen@gmail.com", "12345678").then(value =>{
      expect(value).toEqual(value);
      done();
    });    
  });

  it('Probar la función emailVerification', (done: DoneFn) => { 
    service.emailVerification().then(value =>{
      expect(value).toEqual(value);
      done();
    });    
  });

  it('Probar la función logOut', () => { 
      expect(service.logout()).toBe();
    });
});
