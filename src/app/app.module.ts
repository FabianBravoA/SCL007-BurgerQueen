import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { ChefComponent } from './components/chef/chef.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreakfeastComponent } from './components/breakfeast/breakfeast.component';
import { RestofthedayComponent } from './components/restoftheday/restoftheday.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListCommandsComponent } from './components/list-commands/list-commands.component';
import { FormCommandbComponent } from './components/form-commandb/form-commandb.component';
import { FormCommandrComponent } from './components/form-commandr/form-commandr.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    Page404Component,
    WaiterComponent,
    ChefComponent,
    HomeComponent,
    NavbarComponent,
    BreakfeastComponent,
    RestofthedayComponent,
    ListCommandsComponent,
    FormCommandbComponent,
    FormCommandrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule


  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
