import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  helper=new JwtHelperService()
  constructor(private http:HttpClient) { }



  register(body:any){
    return this.http.post('http://localhost:3000/register',body)
  }

  login(body:any){
    return this.http.post('http://localhost:3000/login',body)
  }


  saveToken(token:any){

    localStorage.setItem('token',token)

  }
  IsUser(){
    let token:any=localStorage.getItem('token')
    let decodeToken= this.helper.decodeToken(token)
    if(decodeToken.data.role_id =='62bf9af180ef98715c71ae20'){
      return true
    }
    return false
  }

  userLoggedIn(){



    if(!localStorage.getItem('token')){
      return false
    }
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)


    if(decodeToken.role){
      return false
    }

    if(this.helper.isTokenExpired(token)){
      return false
    }

    return true

  }
}
