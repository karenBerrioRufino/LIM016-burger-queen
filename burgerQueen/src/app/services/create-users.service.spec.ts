import { TestBed } from '@angular/core/testing';

import { createUsersService } from './create-users.service';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

describe('CreateUsersService', () => {
  let service: createUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        AngularFireAuth,
      ],
    });
    service = TestBed.inject(createUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
