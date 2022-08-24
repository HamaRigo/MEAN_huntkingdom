import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http:HttpClient) { }
  listePanier(){
    return this.http.get("http://localhost:3000/panier/liste_panier");
  }
  ajouterPAnier(id_user:String,id_livraison:String,id_etat:String,lignes:any){
    return this.http.post("http://localhost:3000/panier/ajouterPanier",{idUser:id_user,idLivraison:id_livraison,idEtat:id_etat,lignes:lignes })
  }
}
