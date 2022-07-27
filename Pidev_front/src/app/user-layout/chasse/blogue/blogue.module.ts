import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogueRoutingModule } from './blogue-routing.module';
import { BlogueComponent } from './blogue/blogue.component';
import { DetailBlogueComponent } from './detail-blogue/detail-blogue.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BlogueComponent,
    DetailBlogueComponent
  ],
  imports: [
    CommonModule,
    BlogueRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class BlogueModule { }
