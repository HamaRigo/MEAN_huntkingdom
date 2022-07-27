import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GibierComponent} from "./gibier/gibier.component";
import {DetailGibierComponent} from "./detail-gibier/detail-gibier.component";

const routes: Routes = [
  {path:'',component:GibierComponent},
  {path:'detailGibier/:id',component:DetailGibierComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GibierRoutingModule { }
