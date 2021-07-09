


import { Component, OnInit } from '@angular/core';
import { Product, ProductclassComponent } from 'src/app/admin/class/productclass/productclass.component';
import {ActivatedRoute} from '@angular/router';
import { Shared } from 'src/app/service/shared.service';
import { listcart } from 'src/app/admin/class/cartclass/cartclass.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
  providers : [Product, ProductclassComponent,listcart]
})
export class ProductdetailComponent implements OnInit {

  private id : number;
  image : string;
  overview : string;
  detailcomposition : string;
  uses : string;
  content : string;
  soluong : number=1;
  array : any =[];
  sl : number =0;
  product : Product;
  listlienquan : Array<Product>;
  constructor(
    private productclassComposition : ProductclassComponent,
   
    private activatedRouter : ActivatedRoute,
    private listcart :listcart,
    private shared : Shared,
    private router : Router,
  ) {
  
    
    this.array = new Array();
    this.listlienquan = new Array();

   }

  ngOnInit(): void {
    // this.product = new Product();
    this.get();
  }

  get(){
    
    this.id = Number(this.activatedRouter.snapshot.queryParamMap.get('id'));
    this.productclassComposition.getProduct_doituong(this.id).subscribe(datapro => {this.product = datapro,
      
      this.image = datapro.image,
      this.productclassComposition.getlistpro_category(datapro.category.id).subscribe(data=>{this.listlienquan=data
        for(let item of this.listlienquan){
          if(this.product.id === item.id){
            this.listlienquan.splice(this.listlienquan.indexOf(item),1);
            break;
          }
        }
      }
        );
    }); 
    // this.image = this.product.image;
    this.array =  JSON.parse(localStorage.getItem('cart') || '[]');
    for(let i of this.array){
      this.sl+=i.sl;
    }
    
  }

  checkimage(item : string){
    this.image = item;
  }
  minus(){
    this.soluong--;
  }
  plus(){
    this.soluong++;
    // console.log(this.product);
  }

  buy(){
    // this.listcart = new listcart();
    this.listcart.pro = this.product;
    this.listcart.sl = this.soluong;
    this.array.push(this.listcart);
    localStorage.setItem("cart",JSON.stringify(this.array));
    this.listcart = new listcart();
    this.sl =0 ;
    for(let i of this.array){
      this.sl+=i.sl;
    }
    // this.sl+=Number(this.sl);
    this.shared.setshared(this.sl);
    
  }

  chonimage(item : any){
    this.image = item;
  }
  Dialog_giohang(item: any){
    this.listcart = new listcart();
    this.listcart.pro = item;
    this.listcart.sl = 1;
    this.array.push(this.listcart);
    localStorage.setItem("cart",JSON.stringify(this.array));
    this.sl++;
    this.shared.setshared(this.sl);
  }

  
  counter(x: number, y : number) {
    return this.listlienquan.slice(x,y);
}

  lienquan_detail(id : any){
    this.productclassComposition.getProduct_doituong(id).subscribe(datapro => {this.product = datapro,
      
      this.image = datapro.image,
      this.productclassComposition.getlistpro_category(datapro.category.id).subscribe(data=>{this.listlienquan=data
        for(let item of this.listlienquan){
          if(this.product.id === item.id){
            this.listlienquan.splice(this.listlienquan.indexOf(item),1);
            break;
          }
        }
      }
        );
    }); 
  }

}
