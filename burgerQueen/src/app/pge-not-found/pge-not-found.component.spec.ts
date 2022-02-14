import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgeNotFoundComponent } from './pge-not-found.component';

describe('PgeNotFoundComponent', () => {
  let component: PgeNotFoundComponent;
  let fixture: ComponentFixture<PgeNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgeNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
