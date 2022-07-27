import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceCommentaireService {


  constructor(private http:HttpClient) { }

  getCommentaire(){
    return this.http.get( 'http://localhost:3000/commentaire')
  }
  postCommentaire(commentaire:any){
    return this.http.post('http://localhost:3000/commentaire/',commentaire)
  }
  getCommentaireById(id:any){
    return this.http.get('http://localhost:3000/commentaire/'+id)
  }
  removeCommentaire(id:any){
    return this.http.delete('http://localhost:3000/commentaire/'+id)
  }
  updateCommentaire(id:any,commentaire:any){
    return this.http.patch('http://localhost:3000/commentaire/'+id,commentaire)
  }
}
