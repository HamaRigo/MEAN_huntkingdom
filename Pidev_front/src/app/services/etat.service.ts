import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtatService {

  constructor(private http:HttpClient) { }
  listeEtats(){
    return this.http.get("http://localhost:3000/etatPanier/liste_etat");
  }
  deleteEtat(id:string){
    return this.http.post("http://localhost:3000/etatPanier/deleteEtat",{id:id});
  }
  ajouterEtat(label:string){
    return this.http.post("http://localhost:3000/etatPanier/ajouterEtat",{label:label })
  }
  getEtat(id:string){
    return this.http.get("http://localhost:3000/etatPanier/etat/"+id);
  }
  modifierEtat(id:string,label:string){
    return this.http.post("http://localhost:3000/etatPanier/updateEtat",{id:id,label:label});
  }
}
