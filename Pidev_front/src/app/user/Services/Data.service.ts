import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
    .set('authorization',this.token)
    .set('role_id','62bf9a8b80ef98715c71ae1f')

  params=new HttpParams()
    // .set('secret',environment.secret)
    // .set('client',environment.client)
    // .set('page',environment.client)
    // .set('limit',environment.client)


  headerall=new HttpHeaders()
    .set('authorization',this.token)

  constructor(private http :HttpClient) { }

  getAllusers(){
    // return this.http.get(`${environment.urlBackend}`+'users/')
    return this.http.get(`${environment.urlBackend}`+'users/',{headers:this.headerAdmin})
  }

  adduser(profile:any){

    return this.http.post(environment.urlBackend+'auth/register',profile,{headers:this.headerAdmin,params:this.params})
    // return this.http.post(environment.urlBackend+'auth/register',profile)

  }

  deleteuser(id:any){
    return this.http.delete(environment.urlBackend+'users/'+id,{headers:this.headerAdmin,params:this.params})
    // return this.http.delete(environment.urlBackend+'users/'+id)

  }


  updateuser(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'users/'+id,newprofile,{headers:this.headerAdmin,params:this.params})

  }


  getOneuser(id:any):Observable<any>{

    return this.http.get(environment.urlBackend+'users/'+id,{headers:this.headerall,params:this.params})
    // return this.http.get(environment.urlBackend+'users/'+`${id}`)
    // return this.http.get(environment.urlBackend+'users/'+id)

  }



}
