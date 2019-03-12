import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/common';

import { WaiterComponent } from '../app/waiter/waiter.component';
@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule {}

const routes: Routes = [{ path: 'Waiter/Waitress', component: WaiterComponent }];
