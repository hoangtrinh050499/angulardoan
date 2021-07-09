import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Dashboard{

    constructor(private http :HttpClient ){}


    gettongtiennhap(month : number): Observable<number>{
        const url = "http://localhost:8081/tongtienhang/"+month;
        return this.http.get<number>(url);
    }
    gettongtienban(month : number): Observable<number>{
        const url = "http://localhost:8081/tongtienban/"+month;
        return this.http.get<number>(url);
    }
    gettonghoadon(month : number): Observable<number>{
        const url = "http://localhost:8081/tonghoadon/"+month;
        return this.http.get<number>(url);
    }
    gettongkhachhang(month : number): Observable<number>{
        const url = "http://localhost:8081/tongkhachang/"+month;
        return this.http.get<number>(url);
    }
    gettonghoadonhoanthanh(month : number): Observable<number>{
        const url = "http://localhost:8081/tongdonhanghoanthanh/"+month;
        return this.http.get<number>(url);
    }
    gettonghoadonhuy(month : number): Observable<number>{
        const url = "http://localhost:8081/tongdonhanghuy/"+month;
        return this.http.get<number>(url);
    }

    // Dashboard 
    gettopsoluong():Observable<Dashboardclass[]>{
        const url = "http://localhost:8081/topsanphamtheosoluong";
        return this.http.get<Dashboardclass[]>(url);
    }

    gettopdoangthu():Observable<Dashboardclass[]>{
        const url = "http://localhost:8081/topsanphamtheodoanhthu";
        return this.http.get<Dashboardclass[]>(url);
    }


}

export class Dashboardclass{
    image : string;
    name : string;
    doangthu : number;
}