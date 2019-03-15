import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WaiterComponent } from './breakfastwaiter/breakfastwaiter.component';
import { HeaderComponent } from './header/header.component';
import { ChefComponent } from './chef/chef.component';
import { ComandasComponent } from './comandas/comandas.component';
import { MenuComponent } from './menu/menu.component';
import { WaiteroptionComponent } from './waiteroption/waiteroption.component';
import { RestdayComponent } from './restday/restday.component';

const routes: Routes = [
  { path: 'index', component: MenuComponent },
  { path: 'option', component: WaiteroptionComponent },
  { path: 'chef', component: ChefComponent },
  { path: 'restday', component: RestdayComponent },
  { path: 'breakfast', component: WaiterComponent },
  { path: 'comandas', component: ComandasComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MenuComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
