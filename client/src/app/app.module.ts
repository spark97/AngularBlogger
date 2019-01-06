import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component' ;
import {LoginService} from './login/login.service' ;
import {HttpModule} from '@angular/http' ;
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router' ;

const routes = [
  {
    path:"login", component:LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
