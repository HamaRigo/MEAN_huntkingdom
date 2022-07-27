import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class adminService {



  helper=new JwtHelperService()
  constructor(private http:HttpClient) {

   }


  login(body:any){
    return this.http.post('http://localhost:3000/auth/login',body)
  }


  saveDataProfil(token:any){
   localStorage.setItem('token',token)
  }
  getUsername(){
   let token:any=localStorage.getItem('token')
   let decodeToken= this.helper.decodeToken(token)

    return decodeToken.username
    // return decodeToken.role_id

  }
  IsAdmin(){
   let token:any=localStorage.getItem('token')
   let decodeToken= this.helper.decodeToken(token)
      if(decodeToken.data.role_id =='62bf9a8b80ef98715c71ae1f'){
          return true
        }
      return false
  }


  LoggedIn(){
     let token:any=localStorage.getItem('token')

     if(!token){
      return false
     }
     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true
  }
}
