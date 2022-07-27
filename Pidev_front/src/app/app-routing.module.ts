import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

import {AdminLayoutComponent} from "./admin-layout/admin-layout/admin-layout.component";
import {DashbordAdminComponent} from "./dashbord-admin/dashbord-admin/dashbord-admin.component";
import {UserLayoutComponent} from "./user-layout/user-layout/user-layout.component";
import {GuardadminGuard} from "./user/guards/guardadmin.guard";
// import {GuarduserGuard} from "./user/guards/guarduser.guard";
// ,canActivateChild:[GuarduserGuard]
const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
      {path: '',component: HomeComponent},
      {path: 'chasse',loadChildren:()=>import('./user-layout/chasse/chasse.module').then(m=>m.ChasseModule)},
      {path: 'login',loadChildren:()=>import('./user-layout/login/login.module').then(m=>m.LoginModule)},
      {path: 'register',loadChildren:()=>import('./user-layout/register/register.module').then(m=>m.RegisterModule)},
    ]},
  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
    {path:'',component:DashbordAdminComponent},
      //{path:'',loadChildren:()=>import('./dahbord-admin/dahbord-admin.module').then(m=>m.DahbordAdminModule)},
  {path:'chasse',loadChildren:()=>import('./chasse/chasse.module').then(m=>m.ChasseModule)},
  {path:'peche',loadChildren:()=>import('./peche/peche.module').then(m=>m.PecheModule)},
  {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'store',loadChildren:()=>import('./store/store.module').then(m=>m.StoreModule)},
  {path:'evennement',loadChildren:()=>import('./evennement/evennement.module').then(m=>m.EvennementModule)},
  {path:'panier',loadChildren:()=>import('./panier/panier.module').then(m=>m.PanierModule)},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
