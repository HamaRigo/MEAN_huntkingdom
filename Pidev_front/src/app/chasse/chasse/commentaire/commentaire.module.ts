import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentaireRoutingModule } from './commentaire-routing.module';
import { CommentaireComponent } from './commentaire/commentaire.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UpdateCommentaireComponent } from './update-commentaire/update-commentaire.component';
import { DetailCommentaireComponent } from './detail-commentaire/detail-commentaire.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';


@NgModule({
  declarations: [
    CommentaireComponent,
    UpdateCommentaireComponent,
    DetailCommentaireComponent,
    AddCommentaireComponent
  ],
  imports: [
    CommonModule,
    CommentaireRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class CommentaireModule { }
