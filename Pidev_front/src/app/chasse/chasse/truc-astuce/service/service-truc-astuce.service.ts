import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceTrucAstuceService {

  constructor(private http:HttpClient) { }

  getTrucAstuce(){
    return this.http.get( 'http://localhost:3000/trucAstuceChasse')
  }
  postTrucAstuceTrucAstuce(trucAstuce:any){
    return this.http.post('http://localhost:3000/trucAstuceChasse/',trucAstuce)
  }
  getTrucAstuceById(id:any){
    return this.http.get('http://localhost:3000/trucAstuceChasse/'+id)
  }
  removeTrucAstuce(id:any){
    return this.http.delete('http://localhost:3000/trucAstuceChasse/'+id)
  }
  updateTrucAstuce(id:any,trucAstuce:any){
    return this.http.patch('http://localhost:3000/chienChasse/'+id,trucAstuce)
  }
}
