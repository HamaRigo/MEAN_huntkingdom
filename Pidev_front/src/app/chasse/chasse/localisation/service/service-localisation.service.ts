import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceLocalisationService {

  constructor(private http:HttpClient) { }

  getLocalisation(p:any,limit:any){
    return this.http.get( 'http://localhost:3000/localisationChasse/?page='+p+'&limit='+limit)
  }
  getAllLocalisation(){
    return this.http.get( 'http://localhost:3000/localisationChasse/all')
  }
  postLocalisation(localisation:any){
    return this.http.post('http://localhost:3000/localisationChasse/',localisation)
  }
  getLocalisationById(id:any){
    return this.http.get('http://localhost:3000/localisationChasse/'+id)
  }
  removeLocalisation(id:any){
    return this.http.delete('http://localhost:3000/localisationChasse/'+id)
  }
  updateLocalisation(id:any,localisation:any){
    return this.http.patch('http://localhost:3000/localisationChasse/'+id,localisation)
  }
  getEspecesByLocation(id:any){
    return this.http.get('http://localhost:3000/localisationEspece/especes/'+id)
  }
  getLocationNumber(){
    return this.http.get('http://localhost:3000/localisationEspece/chart/')
  }
  postNewEpeceByLocalisation(localisation:any,espece:any){
   return this.http.post( 'http://localhost:3000/localisationEspece/'+localisation+'/'+espece,null)
  }
  getDistance(lng:any,lat:any){
    return this.http.get('http://localhost:3000/localisationChasse/'+lng+'/'+lat)

  }

}
