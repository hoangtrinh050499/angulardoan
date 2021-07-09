import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-employee',
  templateUrl: './customer-employee.component.html',
  styleUrls: ['./customer-employee.component.css']
})
export class CustomerEmployeeComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  get():Observable<Customer[]>{
    const url = "http://localhost:8081/customer";
    return this.http.get<Customer[]>(url);
  }

  getcount(phone : string):Observable<number>{
    const url = "http://localhost:8081/customer/findcount/"+phone;
    return this.http.get<number>(url);
  }

  getphone(phone : string):Observable<Customer>{
    const url = "http://localhost:8081/customer/findphone/"+phone;
    return this.http.get<Customer>(url);
  }

  post(cus : Customer):Observable<Customer>{
    const url = "http://localhost:8081/Customer/insert";
    const http = {
      headers : new HttpHeaders({contentType:'application/json'})
    };
    return this.http.post<Customer>(url,cus,http).pipe(
      tap((movies : Customer)=>console.log('insert thành công')),
      catchError(error=>of(error))
    );
  }
  put(id : number , cus : Customer):Observable<Customer>{
    const url = "http://localhost:8081/Customer/update/"+id;
    const http = {headers : new HttpHeaders({contentType : 'application/json'})}
    return this.http.put<Customer>(url,cus,http).pipe(
      tap((movies : Customer)=>console.log('update thành công')),
      catchError(error=>of(error))
    );
  }


  // Employee
  getEmp():Observable<Employee[]>{
    const url = "http://localhost:8081/employee";
    return this.http.get<Employee[]>(url);
  }

  getEmpId(id : number):Observable<Employee>{
    const url = "http://localhost:8081/employee/"+id;
    return this.http.get<Employee>(url);
  }

  postEmp(emp : Employee):Observable<Employee>{
    const url = "http://localhost:8081/employee/insert";
    const http = {
      headers : new HttpHeaders({contentType:'application/json'})
    };
    return this.http.post<Employee>(url,emp,http).pipe(
      tap((movies : Employee)=>console.log('insert thành công')),
      catchError(error=>of(error))
    );
  }
  putEmp(id : number , emp : Employee):Observable<Employee>{
    const url = "http://localhost:8081/employee/update/"+id;
    const http = {headers : new HttpHeaders({contentType : 'application/json'})}
    return this.http.put<Employee>(url,emp,http).pipe(
      tap((movies : Employee)=>console.log('update thành công')),
      catchError(error=>of(error))
    );
  }

  deleteEmp(id : number): Observable<Employee>{
    const url = "http://localhost:8081/employee/delete/"+id;
    return this.http.delete<Employee>(url);
  }



}

export class Customer{
  [x: string]: any;
  id : number;
  name : string;
  email : string;
  phone : string;
  address : string;
  tongtienhang:number;
  tongtienno : number;
}

export class Employee{
  id : number;
  firstname : string;
  lastname : string;
  image : string;
  date  : string;
  address : string ; 
  phone : string;
}
