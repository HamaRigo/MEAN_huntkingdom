import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChienChasseRoutingModule } from './chien-chasse-routing.module';
import { ChienChasseComponent } from './chien-chasse/chien-chasse.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddChienChasseComponent } from './add-chien-chasse/add-chien-chasse.component';
import { UpdateChienChasseComponent } from './update-chien-chasse/update-chien-chasse.component';
import { DeleteChienChasseComponent } from './delete-chien-chasse/delete-chien-chasse.component';
import { DetailChienChasseComponent } from './detail-chien-chasse/detail-chien-chasse.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    ChienChasseComponent,
    AddChienChasseComponent,
    UpdateChienChasseComponent,
    DeleteChienChasseComponent,
    DetailChienChasseComponent
  ],
    imports: [
        CommonModule,
        ChienChasseRoutingModule,
        FormsModule, HttpClientModule, NgxPaginationModule
    ]
})
export class ChienChasseModule { }
