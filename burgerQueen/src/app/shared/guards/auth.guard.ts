import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
// import { AuthService } from 'src/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: StorageService, private router: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canActive',this.authService.getCurrentUser('currentUser').rol);
    const rol = this.authService.getCurrentUser('currentUser').rol;
    if( rol !== 'Mesero'){
      this.router.navigate(['/login']);
      return false;
    } else return true;

      // map( user => {
      //   if (!user) {
      //     // si el usuario no existe lo redirige a welcome
      //     this.router.navigate(['/login']);
      //     return false;    
      //   }

      //   return true;
      // })
    
  }
  
}
