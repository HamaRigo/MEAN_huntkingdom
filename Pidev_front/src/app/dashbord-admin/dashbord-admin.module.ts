import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordAdminRoutingModule } from './dashbord-admin-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DashbordAdminComponent} from "./dashbord-admin/dashbord-admin.component";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashbordAdminRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class DashbordAdminModule { }
