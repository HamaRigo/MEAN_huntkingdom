import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrucAstuceRoutingModule } from './truc-astuce-routing.module';
import { TrucAstuceComponent } from './truc-astuce/truc-astuce.component';
import { DetailTrucAstuceComponent } from './detail-truc-astuce/detail-truc-astuce.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TrucAstuceComponent,
    DetailTrucAstuceComponent
  ],
  imports: [
    CommonModule,
    TrucAstuceRoutingModule,HttpClientModule,
    FormsModule
  ]
})
export class TrucAstuceModule { }
