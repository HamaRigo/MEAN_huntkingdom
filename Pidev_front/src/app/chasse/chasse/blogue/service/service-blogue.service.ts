import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceBlogueService {

  constructor(private http:HttpClient) { }

  getBlogue(){
    return this.http.get( 'http://localhost:3000/blogues')
  }
  postBlogue(blogue:any){
    return this.http.post('http://localhost:3000/blogues/',blogue)
  }
  getBlogueById(id:any){
    return this.http.get('http://localhost:3000/blogues/'+id)
  }
  removeBlogue(id:any){
    return this.http.delete('http://localhost:3000/blogues/'+id)
  }
  updateBlogue(id:any,blogue:any){
    return this.http.patch('http://localhost:3000/blogues/'+id,blogue)
  }
}
