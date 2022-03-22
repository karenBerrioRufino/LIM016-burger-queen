import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { createUsersService } from 'src/app/services/create-users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})

export class NavegadorComponent implements OnInit{
  getRolUser$: BehaviorSubject<string>;
  rolUser: string = '';

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(private authService: AuthService, private router: Router, private createUser: createUsersService) {
    this.getRolUser$ = this.createUser.getRol();

    // this.getRolUser$.subscribe(value => {
    //   this.rolUser = value;
    //   console.log(this.rolUser);
    // });
  }

  ngOnInit(): void {
  }

  usuariosRout() {
    console.log('click');
    this.router.navigateByUrl("/gestionUsuarios")
  }

  cartaRout() {
    console.log('click');
    this.router.navigateByUrl("/carta");
  }

  pedidoRout() {
    if (this.rolUser === "Mesero" || this.rolUser === "Administrador") {
      console.log('click al mesero');
      this.router.navigateByUrl("/pedidosMesero");
    }
    if (this.rolUser === "Cocinero") {
      console.log('click');
      this.router.navigateByUrl("/pedidosCocinero");
    }
  }

  totalPedidosRout() {
    console.log('click');
    this.router.navigateByUrl("/totalPedidosMesero");
  }

  onLogout() {
   this.authService.logout();
      this.router.navigate(['/']);
      console.log('si cerré sesión');
  }
}
