import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../admin/class/customer-employee/customer-employee.component";
import { Product } from "../admin/class/productclass/productclass.component";
import { Login } from "./login.service";

@Injectable()
export class DangkiService{

    constructor(private http :HttpClient ){}

    postdangki(dk : Dangki):Observable<Dangki>{
        const url = "http://localhost:8081/customer/dangki";
        const http = {headers : new HttpHeaders({contentType:'application/json'})}
        return this.http.post<Dangki>(url,dk,http);
    }

    // getcountlike(id : number):Observable<number>{
    //     const url = "https://javadoan.herokuapp.com/get/likecount/"+id;
    //     return this.http.get<number>(url);
    // }

}

export class Dangki{
    name :string;
    email : string;
    phone : string;
    address : string;
    account : Login;
}