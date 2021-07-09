import { Injectable } from "@angular/core";
import { Customer } from "./customer-employee/customer-employee.component";
import { Product } from "./productclass/productclass.component";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { listcart } from "./cartclass/cartclass.component";
@Injectable({
    providedIn : 'root'
})
export class order {

    constructor(private http : HttpClient){}

    getorder():Observable<DatHang[]>{
      let url = "http://localhost:8081/orderdto";
      return this.http.get<DatHang[]>(url);
    }


    postorder(order : Array<DatHangdetail>):Observable<DatHangdetail[]>{
        const url = "http://localhost:8081/order/insert";
        const http = {
          headers : new HttpHeaders({contentType:'application/json'})
        };
        return this.http.post<DatHangdetail[]>(url,order,http).pipe(
          tap((movies : DatHangdetail[])=>console.log('insert thành công')),
          catchError(error=>of(error))
        );
      }

      postorderdetail(orderdetail : DatHangdetail):Observable<DatHangdetail>{
        const url = "http://localhost:8081/orderdetail/insert";
        const http = {
          headers : new HttpHeaders({contentType:'application/json'})
        };
        return this.http.post<DatHangdetail>(url,orderdetail,http).pipe(
          tap((movies : DatHangdetail)=>console.log('insert thành công')),
          catchError(error=>of(error))
        );
      }

      // detail

    getorderdetail(id : number):Observable<DatHangdetail[]>{
      let url = "http://localhost:8081/orderdetaildto/"+id;
      return this.http.get<DatHangdetail[]>(url);
    }


}

export class DatHang{
    id : number;
    cusdto : Customer;
    orderDate : string;
    address : string;
    status : string;
    formofpayment : string;
    tongtien : number;
}

export class DatHangdetail{

    id : number;
    
    pro : Product;
    sl : number;
    price : number;
    order : DatHang;
}

