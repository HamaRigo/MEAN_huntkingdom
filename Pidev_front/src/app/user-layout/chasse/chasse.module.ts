import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChasseRoutingModule } from './chasse-routing.module';
import { ChasseComponent } from './chasse/chasse.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ChasseComponent
  ],
  imports: [
    CommonModule,
    ChasseRoutingModule,HttpClientModule,
    FormsModule

  ]
})
export class ChasseModule { }
