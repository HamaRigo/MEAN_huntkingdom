import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalisationRoutingModule } from './localisation-routing.module';
import { LocalisationComponent } from './localisation/localisation.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddLocalisationComponent } from './add-localisation/add-localisation.component';
import { UpdateLocalisationComponent } from './update-localisation/update-localisation.component';
import { DetailLocalisationComponent } from './detail-localisation/detail-localisation.component';
import { MapLocationComponent } from './map-location/map-location.component';
import { DistancesComponent } from './distances/distances.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    LocalisationComponent,
    AddLocalisationComponent,
    UpdateLocalisationComponent,
    DetailLocalisationComponent,
    MapLocationComponent,
    DistancesComponent
  ],
  imports: [
    CommonModule,
    LocalisationRoutingModule,
    ChienChasseRoutingModule,
    FormsModule, HttpClientModule, NgxPaginationModule
  ]
})
export class LocalisationModule { }
