import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-skintypeclass',
  templateUrl: './skintypeclass.component.html',
  styleUrls: ['./skintypeclass.component.css']
})
@Injectable()
export class SkintypeclassComponent implements OnInit {

  private dt : Skintype;
  constructor(private http : HttpClient) { }
  ngOnInit(): void {
  }

  
  get():Observable<Skintype[]>{
    let url = "http://localhost:8081/skintype";
    return this.http.get<Skintype[]>(url);
  }

 


  getOne(id : number):Observable<Skintype>{
    const url = "http://localhost:8081/skintype/"+id;
    return this.http.get<Skintype>(url);
  }


}

export class Skintype{
  id : number;
  title : string;
}
