import { Component, OnInit } from '@angular/core';

import {ModeLivraisonService} from "../../services/mode-livraison.service";

@Component({
  selector: 'app-ajouter-mode-livraison',
  templateUrl: './ajouter-mode-livraison.component.html',
  styleUrls: ['./ajouter-mode-livraison.component.css']
})
export class AjouterModeLivraisonComponent implements OnInit {

  label:string="";
  constructor(private modeService: ModeLivraisonService) {

  }

  ngOnInit(): void {
  }
  ajouterMode(){
    this.modeService.ajouterMode(this.label).subscribe();
    window.location.href="http://localhost:4200/panier/liste-mode"
  }
}

