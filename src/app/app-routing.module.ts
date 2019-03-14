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
import { BreakfeastComponent  } from './components/breakfeast/breakfeast.component';
import { RestofthedayComponent  } from './components/restoftheday/restoftheday.component';
import { IndexComponent  } from './components/index/index.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'waiter', component: WaiterComponent},
  {path: 'chef' , component: ChefComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'breakfeast', component: BreakfeastComponent},
  {path: 'restoftheday', component: RestofthedayComponent},
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
