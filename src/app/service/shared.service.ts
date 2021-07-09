import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "../admin/class/productclass/productclass.component";
import { Login } from "./login.service";

@Injectable()
export class Shared{
    constructor(private http : HttpClient
        ){
        }



    private sharedcount : Subject<number> = new  Subject<number>();

    public setshared(count : number){
        this.sharedcount.next(count);
    }

    public  get getShared(){
        return this.sharedcount.asObservable();
    }
    // van de da

    
    private sharedvandeda : Subject<number> = new  Subject<number>();

    public setsharedvandeda(count : number){
        
        this.sharedvandeda.next(count);
    }

    public  get getSharedvandeda(): Observable<number>{
        return this.sharedvandeda;
    }

    //Thanh phan da
    private sharedthanhphan : Subject<number> = new  Subject<number>();

    public setsharedthanhphan(count : number){
        
        this.sharedthanhphan.next(count);
    }

    public  get getSharedthanhphan(): Observable<number>{
        return this.sharedthanhphan;
    }

    // Thuong hieu

    private sharedthuonghieu : Subject<number> = new  Subject<number>();

    public setsharedthuonghieu(count : number){
        
        this.sharedthuonghieu.next(count);
    }

    public  get getSharedthuonghieu(): Observable<number>{
        return this.sharedthuonghieu;
    }



    //product cao cap
    private caocap : Subject<Product[]> = new Subject<Product[]>();

    public setcaocap(pro : Product[]){
        if(pro === null){
            this.caocap.next();
        }
        else{
            this.caocap.next(pro);
        }
        
    }

    public get getCaoCap(){
        return this.caocap.asObservable();
    }

    //check login
    
    private checklogin  : Subject<Login> = new Subject<Login>();

    public setlogin(login : Login){
        this.checklogin.next(login);
    }

    public get getlogin(){
        return this.checklogin.asObservable();
    }

    // like product
    private sharedcountlike : Subject<number> = new  Subject<number>();

    public setsharedlike(count : number){
        this.sharedcountlike.next(count);
    }

    public  get getSharedlike(){
        return this.sharedcountlike.asObservable();
    }
}