import { Component, OnInit } from '@angular/core';
import {ServiceCommentaireService} from "../service/service-commentaire.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent implements OnInit {

  constructor(private serviceCommentaire:ServiceCommentaireService,private router:Router) { }

  ngOnInit(): void {
  }
  addCommentaire(f:any){
    this.serviceCommentaire.postCommentaire(f.value).subscribe(()=>{
      this.router.navigate(['/chasse/commentaire'])
    })
  }

}
