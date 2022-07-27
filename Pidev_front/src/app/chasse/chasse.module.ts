import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChasseRoutingModule } from './chasse-routing.module';
import { ChasseComponent } from './chasse/chasse.component';
import {ChienChasseRoutingModule} from "./chasse/chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ChasseComponent
  ],
  imports: [
    CommonModule,
    ChasseRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class ChasseModule { }
