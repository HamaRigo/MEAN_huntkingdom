import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChienChasseComponent} from "./chien-chasse/chien-chasse.component";
import {AddChienChasseComponent} from "./add-chien-chasse/add-chien-chasse.component";
import {DeleteChienChasseComponent} from "./delete-chien-chasse/delete-chien-chasse.component";
import {UpdateChienChasseComponent} from "./update-chien-chasse/update-chien-chasse.component";
import {DetailChienChasseComponent} from "./detail-chien-chasse/detail-chien-chasse.component";

const routes: Routes = [
  {path:'',component:ChienChasseComponent},
  {path:'addChien',component:AddChienChasseComponent},
  {path:'deleteChien/:id',component:DeleteChienChasseComponent},
  {path:'updateChien/:id',component:UpdateChienChasseComponent},
  {path:'detailChien/:id',component:DetailChienChasseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChienChasseRoutingModule { }
