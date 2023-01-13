import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth : AngularFireAuth, private router : Router) { }

  // Login
  
  logIn(email : string, password : string){
    this.auth.signInWithEmailAndPassword(email,password).then( ()=> {
      localStorage.setItem('token', 'true');
      // this.success = true;
      this.router.navigate(['/dashboard']);
    }).catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
    })
 }


//  logout

 logout(){
  this.auth.signOut().then( () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  });
  alert('Logged Out');
}
}
