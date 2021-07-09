import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Category } from '../categoryclass/categoryclass.component';
import { Composition } from '../compositionclass/compositionclass.component';
import { Trademark } from '../trademarkclass/trademarkclass.component';
import { Skintype } from '../skintypeclass/skintypeclass.component';
import { Imageprduct } from '../imageproductclass/imageproductclass.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-productclass',
  templateUrl: './productclass.component.html',
  styleUrls: ['./productclass.component.css'],
  providers:[Category,Composition,Trademark]
})
export class ProductclassComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  // API product
  getProduct() : Observable<Product[]>{
    let url = "http://localhost:8081/product";
    return this.http.get<Product[]>(url);
  }

  getProduct_doituong(id : number) : Observable<Product>{
    let url = "http://localhost:8081/product/"+id;
    return this.http.get<Product>(url);
  }



  getlistpro_skintype(id : number):Observable<Product[]>{
    let url = "http://localhost:8081/skintype/product/"+id;
    return this.http.get<Product[]>(url);
  }
  getlistpro_category(id : number):Observable<Product[]>{
    let url = "http://localhost:8081/category/product/"+id;
    return this.http.get<Product[]>(url);
  }
  getlistpro_composition(id : number):Observable<Product[]>{
    let url = "http://localhost:8081/composition/product/"+id;
    return this.http.get<Product[]>(url);
  }
  getlistpro_trademark(id : number):Observable<Product[]>{
    let url = "http://localhost:8081/trademark/product/"+id;
    return this.http.get<Product[]>(url);
  }

  getlist_caocap():Observable<Product[]>{
    let url = "http://localhost:8081//product/caocap";
    return this.http.get<Product[]>(url);
  }

  getlist_discount():Observable<Product[]>{
    let url = "http://localhost:8081/product/discount";
    return this.http.get<Product[]>(url);
  }

  delete(id : number): Observable<Product>{
    const url = "http://localhost:8081/product/delete/"+id;
    return this.http.delete<Product>(url);
  }

  post(pro : Product):Observable<Product>{
    const HttpOption = {
      headers : new HttpHeaders({contentType:'application/json'})
    };
    const url = "http://localhost:8081/product/insert";
    return this.http.post<Product>(url,pro,HttpOption).pipe(
      tap((movies : Product)=>console.log(movies)),
      catchError(error=>of(error))
    );
  }

  put(id : number , pro : Product):Observable<Product>{
    const url = "http://localhost:8081/product/update/"+id;
    const http = {
      headers : new HttpHeaders({contentType:'application/json'})
    };
    return this.http.put<Product>(url,pro,http).pipe(
      tap((movies : Product)=>(console.log('Update thành côngs')),
      catchError(error=> of(console.log("Update không thành công")))
    ));
  }


  //API image
  // getImage(id): Observable<Image[]>{
  //     let url = "https://javadoan.herokuapp.com/image";
  //     let params = new HttpParams().set('',id);
  //     params.set("idproduct",id);
  //     return this.http.get<Image[]>(url,{params : params});
  // }

}
export class Product{
  id : number;
  nameproduct : string;
  image:string;
  introduce: string;
  overview : string;
  detailcomposition: string;
  uses : string;
  barcode : string;
  discount : number;
  price : number;
  trademark :Trademark;
  composition : Array<Composition>;
  category : Category;
  skintype : Array<Skintype>;
  imageproduct : Array<string>;
}

// export class Image{
//   id : number;
//   image : string;
//   idproduct : Product;
// }


