import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        AngularFireAuth,
      ],
    });
    service = TestBed.inject(ProductService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
