import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalisationRoutingModule } from './localisation-routing.module';
import { LocalisationComponent } from './localisation/localisation.component';
import { DetailLocalisationComponent } from './detail-localisation/detail-localisation.component';
import { DistancesComponent } from './distances/distances.component';
import { MapLocationComponent } from './map-location/map-location.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LocalisationComponent,
    DetailLocalisationComponent,
    DistancesComponent,
    MapLocationComponent
  ],
  imports: [
    CommonModule,
    LocalisationRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ]
})
export class LocalisationModule { }
