import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { LayoutuserComponent } from './layoutuser/layoutuser.component';
import { LayoutAdminAuthComponent } from './login/layout-admin-auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import {AppModule} from "../app.module";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {HomeComponent} from "../home/home/home.component";



@NgModule({
  declarations: [
    LayoutadminComponent,
    LayoutuserComponent,
    LayoutAdminAuthComponent,
    NavbarComponent,
    FooterComponent,
    // HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // AppModule
  ],
  providers: [

  ],
  // bootstrap:[AppComponent]
})
export class LayoutModule { }
