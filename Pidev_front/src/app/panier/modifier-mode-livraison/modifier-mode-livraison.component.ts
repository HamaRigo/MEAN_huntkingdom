import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {ModeLivraisonService} from "../../services/mode-livraison.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-modifier-mode-livraison',
  templateUrl: './modifier-mode-livraison.component.html',
  styleUrls: ['./modifier-mode-livraison.component.css']
})
export class ModifierModeLivraisonComponent implements OnInit {
  mode :any;
  id:any;
  label:string="";
  constructor(private modeService: ModeLivraisonService,private route: ActivatedRoute,private router: Router) {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.modeService.getMode(this.id).subscribe(data=> {
      this.mode=data;
      this.label=this.mode.label;

    });
  }
  modifierMode(){
    this.modeService.modifierMode(this.id,this.label).subscribe();
    window.location.href="http://localhost:4200/panier/liste-mode"
  }
  ngOnInit(): void {
  }

}
