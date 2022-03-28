import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderComponent } from './view-order.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

describe('ViewOrderComponent', () => {
  let component: ViewOrderComponent;
  let fixture: ComponentFixture<ViewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        AngularFireAuth,
      ],
      declarations: [ ViewOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
  });
});
