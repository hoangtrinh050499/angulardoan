import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Supplier } from '../supplierclass/supplierclass.component';
import { Employee } from '../customer-employee/customer-employee.component';
import { Product } from '../productclass/productclass.component';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-importclass',
  templateUrl: './importclass.component.html',
  styleUrls: ['./importclass.component.css'],
  providers:[Supplier]
})
export class ImportclassComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  get():Observable<Import[]>{
    let url ="http://localhost:8081/import";
    return this.http.get<Import[]>(url);
  }

  getidbill(id : number):Observable<Importdetail[]>{
    let url ="http://localhost:8081/import/"+id;
    return this.http.get<Importdetail[]>(url);
  }
  postimport(imp : Import):Observable<Import>{
    const  url ="http://localhost:8081/import/insert";
    const http = {headers : new HttpHeaders({contentType :'application/json'})};
    return this.http.post<Import>(url,imp,http).pipe(
      tap((movies : Import)=>(console.log('Insert thành công'))),
      catchError(error=>of(error))
    );
  }
  
}

export class Import{
  id : number;
  employee : Employee;
  date : string;
  supplier : Supplier;
  tongtien : number;
  importdetaildto : Array<Importdetail>;

}

export class Importdetail{
  id : number;
  image : string ; 
  product : Product ; 
  nsx : string;
  exp : string;
  quantityimport : number;
  unitpriceimport : number;
  unitpricesell : number;
  thanhtien : number;
}
