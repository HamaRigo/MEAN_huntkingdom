import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class adminService {



  helper=new JwtHelperService()
  role_id=''
  constructor(private http:HttpClient) {

   }


  login(data:any):Observable<any>{

    return this.http.post('http://localhost:3000/auth/login',{
      email: data.email,
      password: data.password});
  }


  saveDataProfil(token:any){

  //  let decodeToken= this.helper.decodeToken(token)

   localStorage.setItem('token',token)

  }
  getUsername(){
   let token:any=localStorage.getItem('mysecret')
   let decodeToken= this.helper.decodeToken(token)

    return decodeToken.username
    return decodeToken.role_id

  }


  LoggedIn(){
     let token:any=localStorage.getItem('token')
     if(!token){
      return false
     }
     let decodeToken=this.helper.decodeToken(token)


     if(decodeToken.role_id!=='62bf9af180ef98715c71ae20'){
       return false
     }

     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true
  }
}
