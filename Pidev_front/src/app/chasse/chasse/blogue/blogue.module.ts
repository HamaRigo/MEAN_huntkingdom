import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogueRoutingModule } from './blogue-routing.module';
import { BlogueComponent } from './blogue/blogue.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DetailBlogueComponent } from './detail-blogue/detail-blogue.component';
import { AddBlogueComponent } from './add-blogue/add-blogue.component';
import { UpdateBlogueComponent } from './update-blogue/update-blogue.component';


@NgModule({
  declarations: [
    BlogueComponent,
    DetailBlogueComponent,
    AddBlogueComponent,
    UpdateBlogueComponent
  ],
  imports: [
    CommonModule,
    BlogueRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class BlogueModule { }
