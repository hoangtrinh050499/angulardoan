import { Component, OnInit } from '@angular/core';
import { CategoryclassComponent, TitleCategory } from 'src/app/admin/class/categoryclass/categoryclass.component';
import { Product, ProductclassComponent } from 'src/app/admin/class/productclass/productclass.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CompositionclassComponent } from 'src/app/admin/class/compositionclass/compositionclass.component';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { DialogGiohangComponent } from '../dialog-giohang/dialog-giohang.component';
import { listcart } from 'src/app/admin/class/cartclass/cartclass.component';
import { Shared } from 'src/app/service/shared.service';
import { Login } from 'src/app/service/login.service';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
import { Like, Likeservice } from 'src/app/service/like.service';
@Component({
  selector: 'app-thanhphan',
  templateUrl: './thanhphan.component.html',
  styleUrls: ['./thanhphan.component.css'],
  providers : [TitleCategory, CategoryclassComponent,Product,ProductclassComponent,listcart]
})
export class ThanhphanComponent implements OnInit {

  public listtitlecategory :  Array<TitleCategory>;
  private id : any;
  composition : string;
  array : any =[];
  public listcomposition_product : Array<Product>=[];
  sl : number =0;
  login : Login;
  constructor(
    private categoryclassComponent: CategoryclassComponent,
    private activatedRouter : ActivatedRoute ,
    private productclassComponent : ProductclassComponent,
    private compositionclassComponent : CompositionclassComponent,
    private router :Router,
    private dialog : MatDialog,
    private listcart :listcart,
    private shared : Shared,
    private likeservice :Likeservice
  ) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRouter.snapshot.queryParamMap.get('id'));
    this.compositionclassComponent.getOne(this.id).subscribe(data => this.composition = data.nameComposition );
    this.productclassComponent.getlistpro_composition(this.id).subscribe(data => this.listcomposition_product = data);
    this.get();
  }

  get(): void{
    this.categoryclassComponent.gettitle().subscribe(data=>{this.listtitlecategory = data});

    this.shared.getSharedthanhphan.subscribe(data => {
      this.id = data,
      this.compositionclassComponent.getOne(this.id).subscribe(data => this.composition = data.nameComposition );
      this.productclassComponent.getlistpro_composition(this.id).subscribe(data => this.listcomposition_product = data);
    })



    this.array =  JSON.parse(localStorage.getItem('cart') || '[]');
    for(let i of this.array){
      this.sl+=i.sl;
    }
  }

  checkcategory(item :any){
    this.productclassComponent.getlistpro_category(item.id).subscribe(data=>{this.listcomposition_product= data});
  }

  Dialog_giohang(item:any){
    this.listcart = new listcart();
    this.listcart.pro = item;
    this.listcart.sl = 1;
    this.array.push(this.listcart);
    localStorage.setItem("cart",JSON.stringify(this.array));
    this.sl++;
    this.shared.setshared(this.sl);

    const dialogRef = this.dialog.open(DialogGiohangComponent,{
 
    });
    dialogRef.afterClosed().subscribe(result => {
    ;
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
