import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserlistModule} from "./views/admin/userlist/userlist.module";
import {AdduserModule} from "./views/admin/adduser/adduser.module";
import {DetailuserModule} from "./views/admin/detailuser/detailuser.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserlistModule,
    AdduserModule,DetailuserModule
  ]
})
export class UserModule { }
