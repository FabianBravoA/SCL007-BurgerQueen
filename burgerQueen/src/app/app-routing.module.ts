import { NgModule } from '@angular/core';

import { WaiterComponent } from './waiter/breakfastwaiter.component';
@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule {}

const routes: Routes = [{ path: 'Waiter/Waitress', component: WaiterComponent }];
