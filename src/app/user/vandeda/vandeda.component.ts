import { Component, Input, OnInit,ElementRef } from '@angular/core';
import { Category, CategoryclassComponent, TitleCategory } from 'src/app/admin/class/categoryclass/categoryclass.component';
import { Skintype, SkintypeclassComponent } from 'src/app/admin/class/skintypeclass/skintypeclass.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductclassComponent } from 'src/app/admin/class/productclass/productclass.component';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { DialogGiohangComponent } from '../dialog-giohang/dialog-giohang.component';
import {LocalStorageService} from 'ngx-localstorage';
import { listcart } from 'src/app/admin/class/cartclass/cartclass.component';
import { Shared } from 'src/app/service/shared.service';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
import { Login } from 'src/app/service/login.service';
import { Like, Likeservice } from 'src/app/service/like.service';
@Component({
  selector: 'app-vandeda',
  templateUrl: './vandeda.component.html',
  styleUrls: ['./vandeda.component.css'],
  providers : [TitleCategory, CategoryclassComponent,Skintype,SkintypeclassComponent,Product,ProductclassComponent,
    Category,listcart]
})
export class VandedaComponent implements OnInit {
  public listtitlecategory :  Array<TitleCategory>;
  id : any ;
  public listskintype_product : Array<Product>=[];
  public skintype : string;  
  array : any =[];
  hidden : boolean = true;
  sl : number =0;
  login : Login;
  constructor(
    private categoryclassComponent: CategoryclassComponent,
    private skintypeclassComponent : SkintypeclassComponent,
    private activatedRouter : ActivatedRoute ,
    private productclassComponent : ProductclassComponent,
    private router :Router,
    private dialog : MatDialog,
    private localstorage : LocalStorageService,
    private listcart :listcart,
    private el : ElementRef,
    private shared : Shared,
    private likeservice :Likeservice
  ) { }

  ngOnInit(): void {
    
    this.id = Number(this.activatedRouter.snapshot.queryParamMap.get('id'));

    this.skintypeclassComponent.getOne(this.id).subscribe(data => this.skintype = data.title ),
    this.productclassComponent.getlistpro_skintype(this.id).subscribe(data => {this.listskintype_product = data})
    this.get();
  }

  get(): void{
    this.categoryclassComponent.gettitle().subscribe(data=>{this.listtitlecategory = data});
    // this.activatedRouter.params.subscribe(params => { this.id = params['id']; });
    
    this.shared.getSharedvandeda.subscribe(data => {
      this.id = data,
      this.skintypeclassComponent.getOne(this.id).subscribe(data => this.skintype = data.title ),
        this.productclassComponent.getlistpro_skintype(this.id).subscribe(data => {this.listskintype_product = data
        console.log(this.listskintype_product)
        })

     
    })


    // if(localStorage.getItem('cart')!= null){
      this.array =  JSON.parse(localStorage.getItem('cart') || '[]');
    // }
    for(let i of this.array){
      this.sl+=i.sl;
    }
    
    
  }

  checkcategory(item :any){
    this.productclassComponent.getlistpro_category(item.id).subscribe(data=>{this.listskintype_product= data});
    // this.router.navigate(["item.namecategory"]);
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
      like.acount = JSON.parse(sessionStorage.getItem("login")|| '[]');
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
