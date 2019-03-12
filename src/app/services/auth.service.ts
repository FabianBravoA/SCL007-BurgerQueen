import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  loginEmailUser(email: string, pass: string){
      return new Promise((res, rej) =>{
        this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => res(userData),
        err => rej(err));
      })
  }
  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  //metodo que comproueba si nuestro usuario sta logueado
  isAuth(){
      return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
