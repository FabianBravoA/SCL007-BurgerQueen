import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WaiterComponent } from './breakfastwaiter/breakfastwaiter.component';
import { HeaderComponent } from './header/header.component';
import { ChefComponent } from './chef/chef.component';
import { ComandasComponent } from './comandas/comandas.component';
import { MenuComponent } from './menu/menu.component';
import { WaiteroptionComponent } from './waiteroption/waiteroption.component';
import { RestdayComponent } from './restday/restday.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    HeaderComponent,
    ChefComponent,
    ComandasComponent,
    MenuComponent,
    WaiteroptionComponent,
    RestdayComponent,
    OrderdetailComponent
  ],
  imports: [FormsModule, AppRoutingModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
