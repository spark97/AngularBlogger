import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router' ;
import { AppComponent } from './app.component';
import {LoginComponent} from './login.component' ;
import {LoginService} from './login.service' ;
import {HttpModule} from '@angular/http' ;
import {FormsModule} from '@angular/forms';
const routes : Routes = [
  {path:'login',component:LoginComponent}
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
