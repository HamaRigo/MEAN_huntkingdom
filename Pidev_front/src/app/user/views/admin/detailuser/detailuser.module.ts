import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailuserRoutingModule } from './detailuser-routing.module';
import {DetailuserComponent} from "./detailuser.component";
// import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DetailuserComponent
  ],
  imports: [
    CommonModule,
    DetailuserRoutingModule

  ]
})
export class DetailuserModule { }
