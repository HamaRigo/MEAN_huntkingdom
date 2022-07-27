import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChasseComponent} from "./chasse/chasse.component";

const routes: Routes = [
  {path:'',component:ChasseComponent},
  {path:'localisation',loadChildren:()=>import('./localisation/localisation.module').then(m=>m.LocalisationModule)},
  {path:'gibier',loadChildren:()=>import('./gibier/gibier.module').then(m=>m.GibierModule)},
  {path:'chienChasse',loadChildren:()=>import('./chien-chasse/chien-chasse.module').then(m=>m.ChienChasseModule)},
  {path:'blogue',loadChildren:()=>import('./blogue/blogue.module').then(m=>m.BlogueModule)},
  {path:'trucAstuce',loadChildren:()=>import('./truc-astuce/truc-astuce.module').then(m=>m.TrucAstuceModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChasseRoutingModule { }
