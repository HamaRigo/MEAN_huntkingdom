import { Component, OnInit } from '@angular/core';
import {ModeLivraisonService} from "../../services/mode-livraison.service";

@Component({
  selector: 'app-liste-mode-livraison',
  templateUrl: './liste-mode-livraison.component.html',
  styleUrls: ['./liste-mode-livraison.component.css']
})
export class ListeModeLivraisonComponent implements OnInit {

  listeMode :any;
  constructor(private modeService: ModeLivraisonService ) {
    this.modeService.listeMode().subscribe(data=> {
      this.listeMode=data;

    });
  }

  ngOnInit(): void {
  }
  deleteMode(id:string){
    this.modeService.deleteEtat(id).subscribe();
    window.location.href="http://localhost:4200/panier/liste-mode"
  }
}
