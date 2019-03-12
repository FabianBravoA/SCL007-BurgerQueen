import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService, private afAuth: AngularFireAuth) { }
 public app_name: string = 'BurgerQueen';
 public isLogged: boolean = false; 
  ngOnInit() {
    this.getCurrentUser();
  }

  //metodo para saber si estamos logueados o no

  getCurrentUser(){
    this.authservice.isAuth().subscribe(auth =>{
      if(auth){
        console.log('user està logueado');
        this.isLogged = true;
      } else{
        console.log('User no logueado');
        this.isLogged = false;
      }
    })
  }

  onLogout(){
    this.afAuth.auth.signOut();
  }
}