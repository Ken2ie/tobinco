import { Component } from '@angular/core';
import { AuthService } from '../dashboard/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authS : AuthService){}


  title = 'tobinco';

  null : string = '';

  activee : boolean = false;

  email : string = '';
  password : string = '';


  green(){
    if(this.email == this.null){
      this.activee = false;
    }else{
      this.activee = true;
    }
  }

  // Login 
 login(){
  this.authS.logIn(this.email, this.password)
 }

 
}
