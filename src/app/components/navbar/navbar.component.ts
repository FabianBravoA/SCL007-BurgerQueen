import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService, private afAuth: AngularFireAuth) { }
 public app_name: string = 'BurgerQueen';
 public isLogged: boolean = false; 
 public isWaiter: any = null;
 public isChef: any = null;
 public userUid: any = null;
  ngOnInit() {
    this.getCurrentUser();
    this.getCurrentUserRol();
    this.getCurrentUserRolchef();
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

  getCurrentUserRol(){
    this.authservice.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
        this.authservice.isUserWaiter(this.userUid).subscribe(userRole =>{
          this.isWaiter = Object.assign({}, userRole.roles).hasOwnProperty('waiter');
        })
      }
    })
  }
  getCurrentUserRolchef(){
    this.authservice.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
        this.authservice.isUserChef(this.userUid).subscribe(userRole =>{
          this.isWaiter = Object.assign({}, userRole.roles).hasOwnProperty('chef');
        })
      }
    })
  }
  onLogout(){
    this.afAuth.auth.signOut();
  }
}