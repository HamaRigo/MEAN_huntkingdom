import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {ChienChasseRoutingModule} from "./chasse/chasse/chien-chasse/chien-chasse-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "./layout/layout.module";
import {UserlistComponent} from "./user/views/admin/userlist/userlist.component";
import {AdduserComponent} from "./user/views/admin/adduser/adduser.component";
import {DetailuserComponent} from "./user/views/admin/detailuser/detailuser.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UserlistComponent,
    AdduserComponent,
    DetailuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChienChasseRoutingModule,

    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
