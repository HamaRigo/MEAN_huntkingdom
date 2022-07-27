import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GibierRoutingModule } from './gibier-routing.module';
import { GibierComponent } from './gibier/gibier.component';
import { DetailGibierComponent } from './detail-gibier/detail-gibier.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    GibierComponent,
    DetailGibierComponent
  ],
  imports: [
    CommonModule,
    GibierRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ]
})
export class GibierModule { }
