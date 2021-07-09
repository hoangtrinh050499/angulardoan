import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../admin/class/productclass/productclass.component";
import { Login } from "./login.service";

@Injectable()
export class Likeservice{

    constructor(private http :HttpClient ){}

    postlike(like : Like):Observable<Like>{
        const url = "http://localhost:8081/insert/like";
        const http = {headers : new HttpHeaders({contentType:'application/json'})}
        return this.http.post<Like>(url,like,http);
    }

    getcountlike(id : number):Observable<number>{
        const url = "http://localhost:8081/get/likecount/"+id;
        return this.http.get<number>(url);
    }

}

export class Like{
    // id : number;
    products : Product;
    acount : Login;
}