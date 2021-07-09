import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-categoryclass',
  templateUrl: './categoryclass.component.html',
  styleUrls: ['./categoryclass.component.css']
})
export class CategoryclassComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  get():Observable<Category[]>{
    const url = "http://localhost:8081/category";
    return this.http.get<Category[]>(url);
  }

  getOne(id : number):Observable<Category>{
    const url = "http://localhost:8081/category/"+id;
    return this.http.get<Category>(url);
  }

  post(cat : Category):Observable<Category>{
    const url = "http://localhost:8081/category/insert";
    const http = {
      headers : new HttpHeaders({contentType:'application/json'})
    };
    return this.http.post<Category>(url,cat,http).pipe(
      tap((movies : Category)=>console.log('insert thành công')),
      catchError(error=>of(error))
    );
  }

  delete(id :number) : Observable<Category>{
    const url = "http://localhost:8081/category/delete/"+id;
    return this.http.delete<Category>(url).pipe(
      tap((data : Category)=>console.log("Delete thành công")),
      catchError(error => of(error))
    );
  }

  put(id:number, cat : Category):Observable<Category>{
    const url = "http://localhost:8081/category/update/"+id;
    const http = {headers : new HttpHeaders({contentType:'application/json'})};
    return this.http.put<Category>(url,cat,http);
  }

  // get title
  gettitle():Observable<TitleCategory[]>{
    const url = "http://localhost:8081/titlecategory";
    return this.http.get<TitleCategory[]>(url);
  }


}

export class Category{
    id:number;
    namecategory : string;
    titlecategory  : string;
}

export class TitleCategory{
  id : number;
  title : string;
  category  :Array<Category>;
}
