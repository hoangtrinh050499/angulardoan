import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CategoryclassComponent, TitleCategory } from 'src/app/admin/class/categoryclass/categoryclass.component';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { DialogGiohangComponent } from '../dialog-giohang/dialog-giohang.component';
import { Product, ProductclassComponent } from 'src/app/admin/class/productclass/productclass.component';
import { Shared } from 'src/app/service/shared.service';
import { Login } from 'src/app/service/login.service';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
import {SessionStorageService} from 'ngx-webstorage';
import { Like, Likeservice } from 'src/app/service/like.service';
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css'],
  providers : [CategoryclassComponent,TitleCategory,ProductclassComponent,Product]
})
export class HomeuserComponent implements OnInit {

  public listtitlecategory : Array<TitleCategory>;
  public tit : TitleCategory;
  listproduct : Array<Product>=[];
  login :Login;

  show : string;
  constructor(private router : Router,
    private categoryclass : CategoryclassComponent,
    private dialog : MatDialog,
    private productclass : ProductclassComponent,
    private shared : Shared,
    private sessionstorage : SessionStorageService,
    private likeservice :Likeservice
    ) { 
      this.login = new Login();
    }

  ngOnInit(): void {
    this.shared.getlogin.subscribe(data => {
    
        this.login = data;
     
    });
    this.get();
    this.shared.getShared.subscribe(data => {
      console.log(data)
    })
  }

  productdetail(){
    this.router.navigate(['hnskincare.vn/productdetail']);

  }

  get(){
    this.categoryclass.gettitle().subscribe(data => {this.listtitlecategory = data});
    this.productclass.getlist_caocap().subscribe(data => {this.listproduct = data});
    this.show="caocap";
  }

  check(item : TitleCategory){
    if(this.tit === item){
      this.tit = new TitleCategory();

    }
    else{
      this.tit = item;
      // this.id = item.id;
    }
    console.log("this.tit");
  }
  Dialog_giohang(){
    const dialogRef = this.dialog.open(DialogGiohangComponent,{
      data : {
          // pro : this.product
        }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.pro = result;
    });
  }

  counter(i: number) {
    return this.listproduct.slice(0,i);
}

product_caocap(){
  // this.listproduct = new Array();
  this.productclass.getlist_caocap().subscribe(data => {this.listproduct = data
    // console.log(this.listproduct);
    // this.shared.setcaocap(data);
    this.show="caocap";
  });
  
}

product_discount(){
  // this.listproduct = [];
  this.productclass.getlist_discount().subscribe(data=>{this.listproduct = data
    // console.log(this.listproduct)
    // this.shared.setcaocap(data)
  }
    
  );
  this.show = "giamgia";
  
}
All(){
  // this.shared.setcaocap(this.listproduct)
}
product_yeuthich(item : any){
  if(sessionStorage.getItem('login')){

   
    let like : Like = new Like();
    like.products = item;
    like.acount = JSON.parse(sessionStorage.getItem("login")|| '[]');;
    this.likeservice.postlike(like).subscribe(data => console.log(data));
    this.likeservice.getcountlike(like.acount.id).subscribe(data=>{
      this.shared.setsharedlike(data+1);
    });
  }
  else{
    const dialogRef = this.dialog.open(DangnhapComponent
    );
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
  
}

  
}
