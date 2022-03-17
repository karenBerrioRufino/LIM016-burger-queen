import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { createUsersService } from 'src/app/services/create-users.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {
  getRolUser$: BehaviorSubject<string>;
  rolUser: string = '';

  constructor(private authService:AuthService, private router: Router, private createUser: createUsersService) { 
    this.getRolUser$ = this.createUser.getRol();

    this.getRolUser$.subscribe(value => {
      this.rolUser = value;
      console.log(this.rolUser);
    });
  }

  ngOnInit(): void {
  }

    logout(){
      this.authService.logout();
    }
}
