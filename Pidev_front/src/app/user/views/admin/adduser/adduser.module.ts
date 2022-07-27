import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdduserRoutingModule } from './adduser-routing.module';
import {FormsModule} from "@angular/forms";
import {AdduserComponent} from "./adduser.component";



@NgModule({
  declarations: [
    AdduserComponent
  ],
  imports: [
    CommonModule,
    AdduserRoutingModule,
    FormsModule
  ]
})

export class AdduserModule { }
