import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { listcart } from 'src/app/admin/class/cartclass/cartclass.component';
import { Customer, CustomerEmployeeComponent } from 'src/app/admin/class/customer-employee/customer-employee.component';
import { DatHang, DatHangdetail, order } from 'src/app/admin/class/order.service';
import { DatePipe } from '@angular/common';


import { Soluong } from './cart.model';
import { Shared } from 'src/app/service/shared.service';
import { Product } from 'src/app/admin/class/productclass/productclass.component';
import {SessionStorageService} from 'ngx-webstorage';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css'],
  providers:[DatePipe,CustomerEmployeeComponent,order,DatHangdetail]
})
export class GiohangComponent implements OnInit{

  array : any =[];
  sum : number=0;
  sl : number=0;
  dathang : DatHang ;
  dathangdetail : DatHangdetail;
  cusdto : Customer;
  listorderdetail : Array<DatHangdetail>=[];

  count = 0 ;

  @Output() change = new EventEmitter<number>();

  constructor(
    private localstorage : LocalStorageService,
    private customerEmployeeComponent: CustomerEmployeeComponent,
    private datePipe: DatePipe,
    private or : order,
    private shared : Shared,
    private sessionstorage : SessionStorageService,
    private dialog : MatDialog,
    private CustomerEmployeeComponent :CustomerEmployeeComponent

  ){
    this.cusdto = new Customer();
    this.dathang = new DatHang();
    this.dathangdetail = new DatHangdetail();
    
  }


  ngOnInit(): void {
    this.get();

    

  }

  get(){
    this.array =  JSON.parse(localStorage.getItem("cart") || this.array);
    for(let i of this.array){
      this.sum+= i.pro.price*i.sl;
      this.sl+=i.sl;
    }
    
    this.cusdto =  JSON.parse(localStorage.getItem('thongtin') || '[]');
   
  }


  minus(item :any){
    this.sl--;
    this.shared.setshared(this.sl);
    item.sl--;
    localStorage.setItem("cart",JSON.stringify(this.array));
    this.sum=0;
    this.sl=0;
    this.get();
    
  }
  plus(item : any){
    this.sl++;
    this.shared.setshared(this.sl);
    item.sl++;
    localStorage.setItem("cart",JSON.stringify(this.array));
    this.sum=0;
    this.sl=0;
    this.get();
    
  }

  deleteall(){
    localStorage.removeItem('cart');
    this.array=[];
    this.sum = 0;
    this.sl = 0;
    this.shared.setshared(this.sl);
  }


  order(){
    localStorage.setItem("thongtin",JSON.stringify(this.cusdto));
    var date = new Date();
    var t : any ; 
    t = this.datePipe.transform(date,"yyyy-MM-dd hh:mm:ss");

    // this.customerEmployeeComponent.getcount(this.cusdto.phone).subscribe(data => {
    //   if(data === 1){
    //     this.customerEmployeeComponent.getphone(this.cusdto.phone).subscribe(data => 
    //         this.cusdto.id = data.id
    //         );

    //         this.dathang.cusdto = this.cusdto;
    //         this.dathang.date=t;       
            

    //       for(let item of this.array){
    //         this.dathangdetail.order = this.dathang;
    //         this.dathangdetail.pro = item.pro;
    //         this.dathangdetail.sl = item.sl;
    //         // this.or.postorderdetail(this.dathangdetail).subscribe(data => console.log(data));
            
    //         this.listorderdetail.push(this.dathangdetail);
    //         this.dathangdetail = new DatHangdetail();
    //       }
    //       this.or.postorder(this.listorderdetail).subscribe(data => console.log(data));
    //       this.listorderdetail = [];
          
    //   }
    //   else{
    //     console.log(data);
    //   }
    // });

    if(sessionStorage.getItem('login')){
      // dang nhap roi
      this.CustomerEmployeeComponent.put(this.cusdto.id,this.cusdto).subscribe(data => console.log(data));
      this.dathang.cusdto = this.cusdto;
      this.dathang.orderDate=t;
      this.dathang.address =  this.cusdto.address; 
      this.dathang.tongtien = this.sum;

      for(let item of this.array){
        this.dathangdetail.order = this.dathang;
        this.dathangdetail.pro = item.pro;
        this.dathangdetail.sl = item.sl;
        this.dathangdetail.price  = item.pro.price;
        // this.or.postorderdetail(this.dathangdetail).subscribe(data => console.log(data));
        
        this.listorderdetail.push(this.dathangdetail);
        this.dathangdetail = new DatHangdetail();
      }
      this.or.postorder(this.listorderdetail).subscribe(data => console.log(data));
      this.listorderdetail = [];
      
    }
    else{
      // chua dang nhap
      const dialogRef = this.dialog.open(DangnhapComponent
        );
        dialogRef.afterClosed().subscribe(result => {
         
        });
    }





  }
  delete(item : number){
    // const index = this.array.findIndex((data:any) => data.id === item);
    this.array.splice(item,1);
    localStorage.removeItem('cart');
    localStorage.setItem("cart",JSON.stringify(this.array));
    this.sl=0;
    this.sum=0;
    for(let i of this.array){
      this.sum+= i.pro.price*i.sl;
      this.sl+=i.sl;
    }
    this.shared.setshared(this.sl);

  }

}
