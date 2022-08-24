import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {EtatService} from "../../services/etat.service";
@Component({
  selector: 'app-ajouter-etat-panier',
  templateUrl: './ajouter-etat-panier.component.html',
  styleUrls: ['./ajouter-etat-panier.component.css']
})
export class AjouterEtatPanierComponent implements OnInit {

  label:string="";
  constructor(private etatService: EtatService) {

  }

  ngOnInit(): void {
  }
  ajouterEtat(){
    this.etatService.ajouterEtat(this.label).subscribe();
    window.history.back()
  }

}
