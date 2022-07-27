import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import {UserlistComponent} from "./userlist.component";


@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserlistRoutingModule,


  ]
})
export class UserlistModule { }
