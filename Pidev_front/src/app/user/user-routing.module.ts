import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdduserComponent} from "./views/admin/adduser/adduser.component";

const routes: Routes = [

  {path:'adduser',loadChildren:()=>import('./views/admin/adduser/adduser.module').then(m=>m.AdduserModule)},
  {path:'detailuser/:id',loadChildren:()=>import('./views/admin/detailuser/detailuser.module').then(m=>m.DetailuserModule)},
  {path:'allusers',loadChildren:()=>import('./views/admin/userlist/userlist.module').then(m=>m.UserlistModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
