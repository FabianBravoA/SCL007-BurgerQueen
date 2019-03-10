import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { ChefComponent } from './components/chef/chef.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms'; 

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'waiter', component: WaiterComponent},
  {path: 'chef' , component: ChefComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'user/login', component: LoginComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: '**', component: Page404Component}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  })
export class AppRoutingModule { }
