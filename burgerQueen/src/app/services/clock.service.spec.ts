import { TestBed } from '@angular/core/testing';

import { ClockService } from './clock.service';

describe('ClockService', () => {
  let service: ClockService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClockService
      ], 
    });
    service = TestBed.inject(ClockService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('getInfoReloj debería retornar un valor Observable', (done: DoneFn)=>{
  //   service.getInfoReloj().subscribe((value) =>{
  //     expect(value).toBe();
  //     done();
  //   })
  // })
});
