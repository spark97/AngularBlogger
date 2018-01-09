import { Component } from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {LoginService} from './login.service' ;


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(
        private loginservice : LoginService 
    ){}

    details : any ;

    auth(form:NgForm){
        this.details = form.value;
        this.loginservice.authenticate(this.details.email,this.details.password).subscribe(response=>{
            console.log(response);
        })
    }
  title = 'Login|Blogger';  
}
