import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http' ;
import {Observable} from 'rxjs/Rx' ;
import {HttpHeaders,HttpParams} from '@angular/common/http' ;
import 'rxjs/add/operator/map' ;

 
@Injectable()

export class LoginService{
    constructor(
        private http:Http
    ){}
    body : any ;
    authenticate(email:string, password:string) : Observable<any>{
        const myheader = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: myheader });
        this.body = {
            email : email,
            password : password
        }
        return this.http.post('http://localhost:3000/auth',this.body).map((res:Response)=>res.json()) ;
    }
}