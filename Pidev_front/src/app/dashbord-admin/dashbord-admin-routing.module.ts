import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordAdminComponent} from "./dashbord-admin/dashbord-admin.component";

const routes: Routes = [
  {path:'',component:DashbordAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordAdminRoutingModule { }
