import { Component, OnInit } from '@angular/core';
import { CategoryclassComponent, TitleCategory } from 'src/app/admin/class/categoryclass/categoryclass.component';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { DialogGiohangComponent } from '../dialog-giohang/dialog-giohang.component';
import { Shared } from 'src/app/service/shared.service';
import { Product, ProductclassComponent } from 'src/app/admin/class/productclass/productclass.component';
import {ActivatedRoute} from '@angular/router'
;import { Like, Likeservice } from 'src/app/service/like.service';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
@Component({
  selector: 'app-danhsachproduct',
  templateUrl: './danhsachproduct.component.html',
  styleUrls: ['./danhsachproduct.component.css'],
  providers : [TitleCategory, CategoryclassComponent,Product,ProductclassComponent]
})
export class DanhsachproductComponent implements OnInit {

  public listtitlecategory :  Array<TitleCategory>;
  listproduct :  Product[];
  show : any;
  constructor(
    private categoryclassComponent: CategoryclassComponent,
    private dialog : MatDialog,
    private shared : Shared,
    private productclass : ProductclassComponent,
    private activatedRouter : ActivatedRoute,
    private productclassComponent : ProductclassComponent,
    private likeservice :Likeservice,
  ) {

    // this.listproduct = new Array<Product>();
   }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.categoryclassComponent.gettitle().subscribe(data=>{this.listtitlecategory = data});
    // this.shared.getCaoCap.subscribe(data=>{this.listproduct=data,
    // console.log(this.listproduct)
    // });

    this.show = this.activatedRouter.snapshot.queryParamMap.get('show');
    if(this.show === 'caocap'){
      this.productclass.getlist_caocap().subscribe(data => {this.listproduct = data});
    }
    else if(this.show === 'giamgia'){
      this.productclass.getlist_discount().subscribe(data=>{this.listproduct = data});
        
    }

  }
  checkcategory(item :any){
    this.productclassComponent.getlistpro_category(item.id).subscribe(data=>{this.listproduct= data});
  }
  Dialog_giohang(item : any){
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
