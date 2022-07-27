import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrucAstuceComponent} from "./truc-astuce/truc-astuce.component";
import {DetailTrucAstuceComponent} from "./detail-truc-astuce/detail-truc-astuce.component";

const routes: Routes = [
  {path:'',component:TrucAstuceComponent},
  {path:'detailAstuce/:id',component:DetailTrucAstuceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucAstuceRoutingModule { }
