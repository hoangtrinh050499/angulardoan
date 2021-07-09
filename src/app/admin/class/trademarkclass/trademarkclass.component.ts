import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-trademarkclass',
  templateUrl: './trademarkclass.component.html',
  styleUrls: ['./trademarkclass.component.css']
})
export class TrademarkclassComponent implements OnInit {
  [x: string]: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  getTrademark():Observable<Trademark[]>{
    let url ="http://localhost:8081/trademark";
    return this.http.get<Trademark[]>(url);
  }

  getOne(id : number):Observable<Trademark>{
    const url = "http://localhost:8081/trademark/findone/"+id;
    return this.http.get<Trademark>(url);
  }

  post(tdm : Trademark):Observable<Trademark>{
    const HttpOption = {
      headers : new HttpHeaders({contentType:'application/json'})
    };
    const url = "http://localhost:8081/trademark/insert";
    return this.http.post<Trademark>(url,tdm,HttpOption).pipe(
      tap((movies : Trademark)=>console.log('insert thành công')),
      catchError(error=>of(error))
    );
  }

  put(id : number , tdm : Trademark):Observable<Trademark>{
    const url = "http://localhost:8081/trademark/udpate/"+id;
    const http = {
      headers : new HttpHeaders({contentType:'application/json'})
    };
    return this.http.put<Trademark>(url,tdm,http).pipe(
      tap((movies : Trademark)=>(console.log('Update thành côngs')),
      catchError(error=> of(error))
    ));
  }

  delete(id : number):Observable<Trademark>{
    const url= "http://localhost:8081/trademark/delete/"+id;
    return this.http.delete<Trademark>(url).pipe(tap((data: Trademark)=>console.log("Delete thành công"),
    catchError(error=>of(error))
    ));
  }


}

export class Trademark{
    id : number;
    nametrademark : string;
    content:string;
}
