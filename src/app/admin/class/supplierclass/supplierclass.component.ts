import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-supplierclass',
  templateUrl: './supplierclass.component.html',
  styleUrls: ['./supplierclass.component.css']
})
export class SupplierclassComponent implements OnInit {


  constructor(private http : HttpClient) { };

  ngOnInit(): void {
  }

  get():Observable<Supplier[]>{
    const url = "http://localhost:8081/supplier";
    return this.http.get<Supplier[]>(url);
  }

  post(sup : Supplier):Observable<Supplier>{
      const url = "http://localhost:8081/supplier/insert";
      const http = {headers : new HttpHeaders({contentType :'application/json'})};
      return this.http.post<Supplier>(url,sup,http).pipe(
        tap((movies : Supplier)=>(console.log('Insert thành côngs')),
        catchError(error=> of(error))
      ));
  }

  put(id : number , sup :Supplier):Observable<Supplier>{
    const url = "http://localhost:8081/supplier/update/"+id;
    const http = {headers : new HttpHeaders({contentType : 'application/json'})};
    return this.http.put<Supplier>(url , sup, http).pipe(
      tap((movies : Supplier)=>(console.log('Update thành côngs')),
      catchError(error=> of(error))
    ));
  }

  delete(id : number){
    const url = "http://localhost:8081/supplier/delete/"+id;
    return this.http.delete(url);
  }
  
}

export class Supplier{
  id :number;
  namesupplier : string;
  email : string;
  phone : string;
  address : string;

}