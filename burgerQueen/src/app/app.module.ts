import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaiterComponent } from './waiter/waiter.component';
import { HeaderComponent } from './header/header.component';
import { ChefComponent } from './chef/chef.component';
import { ComandasComponent } from './comandas/comandas.component';
import { MenuComponent } from './menu/menu.component';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, WaiterComponent, HeaderComponent, ChefComponent, ComandasComponent, MenuComponent],
  imports: [BrowserModule],
  // AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
