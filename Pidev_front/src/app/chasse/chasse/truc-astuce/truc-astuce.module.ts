import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrucAstuceRoutingModule } from './truc-astuce-routing.module';
import { TrucAstuceComponent } from './truc-astuce/truc-astuce.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DetailTrucAstuceComponent } from './detail-truc-astuce/detail-truc-astuce.component';
import { UpdateTrucAstuceComponent } from './update-truc-astuce/update-truc-astuce.component';
import { AddTrucAstuceComponent } from './add-truc-astuce/add-truc-astuce.component';


@NgModule({
  declarations: [
    TrucAstuceComponent,
    DetailTrucAstuceComponent,
    UpdateTrucAstuceComponent,
    AddTrucAstuceComponent
  ],
  imports: [
    CommonModule,
    TrucAstuceRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class TrucAstuceModule { }
