import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogueComponent} from "./blogue/blogue.component";
import {DetailBlogueComponent} from "./detail-blogue/detail-blogue.component";

const routes: Routes = [
  {path:'',component:BlogueComponent},
  {path:'detailBlogue',component:DetailBlogueComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogueRoutingModule { }
