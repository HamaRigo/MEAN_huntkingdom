import { Component, OnInit } from '@angular/core';
import {ServiceCommentaireService} from "../service/service-commentaire.service";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
commentaire:any
  constructor(private serviceCommentaire:ServiceCommentaireService) { }

  ngOnInit(): void {
  this.serviceCommentaire.getCommentaire().subscribe((data)=>{
    this.commentaire=data
  })
  }

}
