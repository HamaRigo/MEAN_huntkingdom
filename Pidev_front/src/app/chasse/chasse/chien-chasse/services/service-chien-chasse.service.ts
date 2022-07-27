import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceChienChasseService {

  constructor(private http:HttpClient) { }

  getChienChasse(p:any,limit:any){
    return this.http.get( 'http://localhost:3000/chienChasse/?page='+p+'&limit='+limit)
  }
  postChienChasse(chienChasse:any){
    return this.http.post('http://localhost:3000/chienChasse/add/',chienChasse)
  }
  getChienChasseById(id:any){
    return this.http.get('http://localhost:3000/chienChasse/'+id)
  }
  removeChienChasse(id:any){
    return this.http.delete('http://localhost:3000/chienChasse/'+id)
  }
  updateChienChasse(id:any,chienChasse:any){
    return this.http.patch('http://localhost:3000/chienChasse/'+id,chienChasse)
  }
}
