import { TestBed } from '@angular/core/testing';

import { CreateUsersService } from './createUsers.service';

describe('CreateUsersService', () => {
  let service: CreateUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
