import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  // {
  //   path:'dashboard',
  //    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
  // }, 
  // {
  //   path:'auth',
  //    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  // }, 
  
  {
    path:'',redirectTo:'/dashboard',pathMatch:'full'
  },
  
  {
    path:'**',component:NopagefoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule],
  exports:[RouterModule]
})
export class AppRoutingModule { }
