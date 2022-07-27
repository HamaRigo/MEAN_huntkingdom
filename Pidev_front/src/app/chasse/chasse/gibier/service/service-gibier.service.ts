import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceGibierService {

  constructor(private http:HttpClient) { }

  getEspeceChasse(p:any,limit:any){
    return this.http.get( 'http://localhost:3000/especeChasse/?page='+p+'&limit='+limit)
  }
  getAllEspeceChasse(){
    return this.http.get( 'http://localhost:3000/especeChasse/all')
  }
  postEspeceChasse(especeChasse:any){
    return this.http.post('http://localhost:3000/especeChasse/',especeChasse)
  }
  getEspeceChasseById(id:any){
    return this.http.get('http://localhost:3000/especeChasse/'+id)
  }
  removeEspeceChasse(id:any){
    return this.http.delete('http://localhost:3000/especeChasse/'+id)
  }
  updateEspeceChasse(id:any,especeChasse:any){
    return this.http.patch('http://localhost:3000/especeChasse/'+id,especeChasse)
  }
  getLocationByEspece(id:any){
    return this.http.get('http://localhost:3000/localisationEspece/localisation/'+id)
  }
  postNewLocationByEspece(espece:any,localisation:any){
    return this.http.post( 'http://localhost:3000/localisationEspece/addLocalisation/'+espece+'/'+localisation,null)
  }

}
