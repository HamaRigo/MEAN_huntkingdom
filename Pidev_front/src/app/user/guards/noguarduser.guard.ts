import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from 'src/app/user/Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class NoguarduserGuard implements CanActivateChild {
  constructor(private aus:UserService,private router:Router){

  }


  canActivateChild(childRoute: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return new Promise((resolve,reject)=>{
      if(!this.aus.userLoggedIn()){
        resolve(true)


    }
    else{
      resolve(false)

      this.router.navigate(['/'])
    }
    })

  }

}
