import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: '**', component: PageNotFoundComponent,
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
