import { Component, OnInit } from '@angular/core';
import {ServiceCommentaireService} from "../service/service-commentaire.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-commentaire',
  templateUrl: './detail-commentaire.component.html',
  styleUrls: ['./detail-commentaire.component.css']
})
export class DetailCommentaireComponent implements OnInit {
id:any
  commentaire:any
  constructor(private serviceCommentaire:ServiceCommentaireService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id']
    this.serviceCommentaire.getCommentaireById(this.id).subscribe((data)=>{
      this.commentaire=data
    })
  }
  update(id:any){
  this.router.navigate(['/chasse/commentaire/updateCommentaire/'+id])
  }
  delete(id:any){
  this.serviceCommentaire.removeCommentaire(id).subscribe(()=>{
    this.router.navigate(['/chasse/commentaire'])
  })
  }

}
