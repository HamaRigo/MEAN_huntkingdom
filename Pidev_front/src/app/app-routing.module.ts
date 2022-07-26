import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {DashboardComponent} from "./user/views/admin/dashboard/dashboard.component";
import {LayoutadminComponent} from "./layout/layoutadmin/layoutadmin.component";
import {LayoutuserComponent} from "./layout/layoutuser/layoutuser.component";
import {LayoutAdminAuthComponent} from "./layout/login/layout-admin-auth.component";

const routes: Routes = [
  {path:'',component:LayoutuserComponent,children:[
          {path: '',component: HomeComponent},
              // {path:'',loadChildren:()=>import('./home/home/home.module').then(m=>m.HomeModule)},
      // {path:'login',loadChildren:()=>import('./user/views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
      {path: 'login',component: LayoutAdminAuthComponent},
      {path:'register',loadChildren:()=>import('./user/views/user/register/register.module').then(m=>m.RegisterModule)},
// ]},
      {path:'',loadChildren:()=>import('./home/home/home.module').then(m=>m.HomeModule)},
      {path: 'chasse',loadChildren:()=>import('./chasse/chasse.module').then(m=>m.ChasseModule)},
  {path:'peche',loadChildren:()=>import('./peche/peche.module').then(m=>m.PecheModule)},
  // {path:'listuser',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'store',loadChildren:()=>import('./store/store.module').then(m=>m.StoreModule)},
  {path:'evennement',loadChildren:()=>import('./evennement/evennement.module').then(m=>m.EvennementModule)},
  {path:'panier',loadChildren:()=>import('./panier/panier.module').then(m=>m.PanierModule)},
]},
// {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
{path:'admin',component:LayoutadminComponent,children:[
  {path:'',loadChildren:()=>import('./user/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./user/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'allusers',loadChildren:()=>import('./user/views/admin/userlist/userlist.module').then(m=>m.UserlistModule)},
  {path:'adduser',loadChildren:()=>import('./user/views/admin/adduser/adduser.module').then(m=>m.AdduserModule)},
  {path:'detailuser/:id',loadChildren:()=>import('./user/views/admin/detailuser/detailuser.module').then(m=>m.DetailuserModule)},
]},
{path:'admin/login',component:LayoutAdminAuthComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
