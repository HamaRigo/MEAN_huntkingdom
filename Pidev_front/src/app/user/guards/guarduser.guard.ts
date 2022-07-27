import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from 'src/app/user/Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class GuarduserGuard implements CanActivateChild {
  constructor(private aus:UserService,private router:Router){

  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve,reject)=>{
      if(this.aus.userLoggedIn() && this.aus.IsUser()){
      resolve(true)
    }
    else{
      resolve(false)
      this.router.navigate(['/'])

    }
    })


  }

}
