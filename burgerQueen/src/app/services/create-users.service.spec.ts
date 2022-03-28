import { TestBed } from '@angular/core/testing';

import { createUsersService } from './create-users.service';

describe('CreateUsersService', () => {
  let service: createUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(createUsersService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
