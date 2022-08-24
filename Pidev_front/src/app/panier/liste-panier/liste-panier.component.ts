import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-liste-panier',
  templateUrl: './liste-panier.component.html',
  styleUrls: ['./liste-panier.component.css']
})
export class ListePanierComponent implements OnInit {
  listePanier:any;
  ttc:number=0;
  constructor(private panierService:PanierService) {
    this.panierService.listePanier().subscribe(data=> {
      this.listePanier=data;

    });
  }

  ngOnInit(): void {
  }

}
