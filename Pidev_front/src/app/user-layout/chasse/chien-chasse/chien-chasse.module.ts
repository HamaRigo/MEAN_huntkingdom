import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChienChasseRoutingModule } from './chien-chasse-routing.module';
import { ChienChasseComponent } from './chien-chasse/chien-chasse.component';
import { DetailChienChasseComponent } from './detail-chien-chasse/detail-chien-chasse.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    ChienChasseComponent,
    DetailChienChasseComponent
  ],
  imports: [
    CommonModule,
    ChienChasseRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ChienChasseModule { }
