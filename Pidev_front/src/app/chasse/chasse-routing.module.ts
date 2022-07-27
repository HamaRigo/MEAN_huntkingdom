import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChasseComponent} from "./chasse/chasse.component";

const routes: Routes = [
  {path:'',component:ChasseComponent},
  {path:'localisation',loadChildren:()=>import('./chasse/localisation/localisation.module').then(m=>m.LocalisationModule)},
  {path:'gibier',loadChildren:()=>import('./chasse/gibier/gibier.module').then(m=>m.GibierModule)},
  {path:'chienChasse',loadChildren:()=>import('./chasse/chien-chasse/chien-chasse.module').then(m=>m.ChienChasseModule)},
  {path:'blogue',loadChildren:()=>import('./chasse/blogue/blogue.module').then(m=>m.BlogueModule)},
  {path:'commentaire',loadChildren:()=>import('./chasse/commentaire/commentaire.module').then(m=>m.CommentaireModule)},
  {path:'trucAstuce',loadChildren:()=>import('./chasse/truc-astuce/truc-astuce.module').then(m=>m.TrucAstuceModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChasseRoutingModule { }
