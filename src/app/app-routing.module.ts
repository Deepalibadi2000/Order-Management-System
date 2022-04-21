import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: 'login',component: LoginComponent
  },
 
    {
        path: 'orders', component: OrdersComponent,
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
