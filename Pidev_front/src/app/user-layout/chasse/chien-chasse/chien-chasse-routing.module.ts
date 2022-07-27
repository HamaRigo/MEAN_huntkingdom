import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChienChasseComponent} from "./chien-chasse/chien-chasse.component";
import {DetailChienChasseComponent} from "./detail-chien-chasse/detail-chien-chasse.component";

const routes: Routes = [
  {path:'',component:ChienChasseComponent},
  {path:'detailChien/:id',component:DetailChienChasseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChienChasseRoutingModule { }
