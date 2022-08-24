import { Component, OnInit } from '@angular/core';
import {EtatService} from "../../services/etat.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modifier-etat-panier',
  templateUrl: './modifier-etat-panier.component.html',
  styleUrls: ['./modifier-etat-panier.component.css']
})
export class ModifierEtatPanierComponent implements OnInit {
  etat :any;
  id:any;
  label:string="";
  constructor(private etatService: EtatService,private route: ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get('id');
    this.etatService.getEtat(this.id).subscribe(data=> {
      this.etat=data;
      this.label=this.etat.label;
    });
  }

  ngOnInit(): void {

  }
  modifierEtat(){
    this.etatService.modifierEtat(this.id,this.label).subscribe();
    window.history.back()

  }

}
