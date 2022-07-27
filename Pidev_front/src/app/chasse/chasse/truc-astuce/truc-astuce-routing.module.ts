import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrucAstuceComponent} from "./truc-astuce/truc-astuce.component";
import {AddTrucAstuceComponent} from "./add-truc-astuce/add-truc-astuce.component";
import {UpdateTrucAstuceComponent} from "./update-truc-astuce/update-truc-astuce.component";
import {DetailTrucAstuceComponent} from "./detail-truc-astuce/detail-truc-astuce.component";

const routes: Routes = [
  {path:'',component:TrucAstuceComponent},
  {path:'addAstuce',component:AddTrucAstuceComponent},
  {path:'updateAstuce/:id',component:UpdateTrucAstuceComponent},
  {path:'detailAstuce/:id',component:DetailTrucAstuceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucAstuceRoutingModule { }
