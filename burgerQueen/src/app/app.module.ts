import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaiterComponent } from './breakfastwaiter/breakfastwaiter.component';
import { HeaderComponent } from './header/header.component';
import { ChefComponent } from './chef/chef.component';
import { ComandasComponent } from './comandas/comandas.component';
import { MenuComponent } from './menu/menu.component';
import { WaiteroptionComponent } from './waiteroption/waiteroption.component';
import { RestdayComponent } from './restday/restday.component';
// import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'breakfast', component: WaiterComponent },
  { path: 'chef', component: ChefComponent },
  { path: 'index', component: MenuComponent },
  { path: 'option', component: WaiteroptionComponent },
  { path: 'restday', component: RestdayComponent },
  { path: '', component: MenuComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    HeaderComponent,
    ChefComponent,
    ComandasComponent,
    MenuComponent,
    WaiteroptionComponent,
    RestdayComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
