import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogueComponent} from "./blogue/blogue.component";
import {AddBlogueComponent} from "./add-blogue/add-blogue.component";
import {UpdateBlogueComponent} from "./update-blogue/update-blogue.component";
import {DetailBlogueComponent} from "./detail-blogue/detail-blogue.component";

const routes: Routes = [
  {path:'',component:BlogueComponent},
  {path:'addBlogue',component:AddBlogueComponent},
  {path:'updateBlogue',component:UpdateBlogueComponent},
  {path:'detailBlogue',component:DetailBlogueComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogueRoutingModule { }
