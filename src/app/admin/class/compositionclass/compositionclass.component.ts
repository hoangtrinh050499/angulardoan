import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-compositionclass',
  templateUrl: './compositionclass.component.html',
  styleUrls: ['./compositionclass.component.css']
})
export class CompositionclassComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  get():Observable<Composition[]>{
    let url = "http://localhost:8081/composition";
    return this.http.get<Composition[]>(url);
  }

  getOne(id : number):Observable<Composition>{
    const url = "http://localhost:8081/composition/"+id;
    return this.http.get<Composition>(url);
  }

}

export class Composition{
    id: number;
    nameComposition : string;
}
