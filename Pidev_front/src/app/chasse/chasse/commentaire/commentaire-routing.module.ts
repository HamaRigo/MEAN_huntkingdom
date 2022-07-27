import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentaireComponent} from "./commentaire/commentaire.component";
import {AddCommentaireComponent} from "./add-commentaire/add-commentaire.component";
import {UpdateCommentaireComponent} from "./update-commentaire/update-commentaire.component";
import {DetailCommentaireComponent} from "./detail-commentaire/detail-commentaire.component";

const routes: Routes = [
  {path:'',component:CommentaireComponent},
  {path:'addCommentaire',component:AddCommentaireComponent},
  {path:'updateCommentaire',component:UpdateCommentaireComponent},
  {path:'detailCommentaire',component:DetailCommentaireComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentaireRoutingModule { }
