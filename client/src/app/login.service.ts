import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http' ;
import {Observable} from 'rxjs/Rx' ;
import 'rxjs/add/operator/map' ;

 
@Injectable()

export class LoginService{
    constructor(
        private http:Http
    ){}
    body : any ;
    authenticate(email:string, password:string) : Observable<any>{
        var data = "username="+email+"&password="+password;
        return this.http.post('http://localhost:3000/auth',data).map((res:Response)=>res.json()) ;
    }
}