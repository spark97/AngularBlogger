import { Component } from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {LoginService} from './login.service' ;
import {Router} from '@angular/router' ;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

    constructor(
        private loginservice : LoginService , 
        private router : Router 
){}

details : any ;
status : string ;
user_email : string ;
current_user : any ;



    checkLoggedIn(){
        console.log("Inside function");
        this.current_user = JSON.parse(localStorage.getItem("currentUser"));
        if(this.current_user){
            this.router.navigate([""]);
        }
    }


    auth(form:NgForm){
        this.details = form.value;
        //console.log(this.details);
        this.loginservice.authenticate(this.details.email,this.details.password).subscribe(response=>{
            console.log(response);
            this.user_email = response.email;
            this.status = response.resp;
            console.log(this.user_email);
            if(this.status == "correct"){
                console.log("yes");
                localStorage.setItem('currentUser',JSON.stringify({email:this.user_email}));
                this.router.navigate([""]);
            }
            
        })
    }
  title = 'Login|Blogger';  
}
