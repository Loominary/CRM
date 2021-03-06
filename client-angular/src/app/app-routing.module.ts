import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path: 'home-component', component:HomeComponent},
  {path: 'customers-component', component:CustomersComponent},
  {path:'products-component', component:ProductsComponent},
  {path:'orders-component', component:OrdersComponent},
  {path:'signup-component', component:SignupComponent},
  {path: 'login-component', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
