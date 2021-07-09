import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";


@Injectable()
export class Checklogin{

    constructor(private http :HttpClient ){}

    checklogin(username : string,password : string):Observable<Login>{
        // const url = "https://javadoan.herokuapp.com/login/"+ username+"/"+ password;
        const url = "http://localhost:8081/login/"+ username+"/"+ password;
        // const http = {headers : new HttpHeaders({contentType:'application/json'})}

        return this.http.get<Login>(url);
    }

}

export class Login{
    id : number;
    username : string;
    password : string;
    idtitle: number;

}