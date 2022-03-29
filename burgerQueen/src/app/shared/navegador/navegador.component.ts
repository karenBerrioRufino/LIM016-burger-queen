import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})

export class NavegadorComponent implements OnInit{
  rolUser: string = '';

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService) {
  }

  ngOnInit(): void {
    try{
      this.rolUser = this.storageService.getCurrentUser('currentUser').rol;
    } catch (err){
      console.log(err)
    }
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
    this.router.navigateByUrl("/totalPedidos");
  }

  confirmLogout(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro que desea cerrar sesión?',
      // text: "¡No podrás revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.onLogout();
        this.Toast.fire({
          icon: 'success',
          title: 'Cerraste sesión :)'
        })
      }
      // } else if ( result.dismiss === Swal.DismissReason.cancel ) {
      //   this.Toast.fire({
      //     icon: 'success',
      //     title: 'Sigues dentro ;)'
      //   })
      // }
    })  
  }

  async onLogout() {
    try {
      await this.authService.logout();
      this.storageService.removeCurrentUser();
      this.storageService.clear();

      // this.Toast.fire({
      //   icon: 'success',
      //   title: 'Cerraste sesión :)'
      // })

      this.router.navigate(['/']);
    }
    catch(error: any){
      console.log(error);
    }
  }
}
