import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModeLivraisonService {

  constructor(private http:HttpClient) { }
  listeMode(){
    return this.http.get("http://localhost:3000/livraison/liste_livraison");
  }
  deleteEtat(id:string){
    return this.http.post("http://localhost:3000/livraison/deleteLivraison",{id:id});
  }
  ajouterMode(label:string){
    return this.http.post("http://localhost:3000/livraison/ajouterLivraison",{label:label })
  }
  getMode(id:string){
    return this.http.get("http://localhost:3000/livraison/mode/"+id);
  }
  modifierMode(id:string,label:string){
    return this.http.post("http://localhost:3000/livraison/updatedLivraison",{id:id,label:label});
  }
}
