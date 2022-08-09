import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    loadChildren:()=> import('../app/pages/home/home.module').then(m=>m.HomeModule)

  },
  {
    path:'login',
    component: LoginComponent,
    loadChildren:()=> import('../app/pages/login/login.module').then(m=>m.LoginModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
