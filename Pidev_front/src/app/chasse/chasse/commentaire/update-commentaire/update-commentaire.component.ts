import { Component, OnInit } from '@angular/core';
import {ServiceCommentaireService} from "../service/service-commentaire.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-commentaire',
  templateUrl: './update-commentaire.component.html',
  styleUrls: ['./update-commentaire.component.css']
})
export class UpdateCommentaireComponent implements OnInit {
id:any
  commentaire:any
  constructor(private serviceCommentaire:ServiceCommentaireService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id']
    this.serviceCommentaire.getCommentaireById(this.id).subscribe((data)=>{
      this.commentaire=data
    })
  }
  updateCommentaire(f:any){
  return this.serviceCommentaire.updateCommentaire(this.id,f.value).subscribe(()=>{
    this.router.navigate(['/chasse/commentaire'])
  })
  }

}
