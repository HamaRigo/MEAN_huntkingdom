import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdduserModule} from "../adduser/adduser.module";
import {DetailuserComponent} from "./detailuser.component";

const routes: Routes = [
  {path:'',component:DetailuserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailuserRoutingModule { }
