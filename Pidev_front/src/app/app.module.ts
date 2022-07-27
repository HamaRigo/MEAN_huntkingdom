import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {ChienChasseRoutingModule} from "./chasse/chasse/chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout/user-layout.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin/dashbord-admin.component';
import {DashbordAdminModule} from "./dashbord-admin/dashbord-admin.module";
import {UserModule} from "./user/user.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    DashbordAdminComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChienChasseRoutingModule,
    UserModule,
    FormsModule,
    HttpClientModule,DashbordAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
