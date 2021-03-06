import { Component, OnInit } from '@angular/core';
import { Category } from '../class/categoryclass/categoryclass.component';
import { Composition } from '../class/compositionclass/compositionclass.component';
import { Product, ProductclassComponent } from '../class/productclass/productclass.component';
import { Trademark } from '../class/trademarkclass/trademarkclass.component';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { AddProductComponent } from '../ChucNang/add-product/add-product.component';
import { UpdateProductComponent } from '../ChucNang/update-product/update-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[Product,ProductclassComponent]
})
export class ProductsComponent implements OnInit {

  public list = new  Array<Product>();
  public product = new Product();
  private id : any ;
  private pro :Product;
  
  constructor(private listProduct : ProductclassComponent,
    private router :Router, private activatedRouter :ActivatedRoute,
    private dialog : MatDialog,
    private productclassComponent : ProductclassComponent,
    ) {}

  ngOnInit(): void {
      this.getList();
      
  }

  getList(){
    this.listProduct.getProduct().subscribe(
      data => {this.list=data});
      this.router.navigate(['/products']);
  }

  checkrow(item : Product){
    if(this.product === item){
        this.product = new Product();
        this.id = null;
    }
    else{
      this.product = item;
      this.id = item.id;
    }
    this.router.navigate(['/products'],{queryParams:{id : this.product.id}});
  }

  updateOpenDialog(){
    if(this.id != null){
      const dialogRef = this.dialog.open(UpdateProductComponent,{
        data : {
            pro : this.product
          }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.pro = result;
      });
    }
    else{
      var result = confirm("B???n ch??a ch???n ?????i t?????ng. Vui l??ng ch???n ?????i t?????ng v?? th???c hi???n l???i y??u c???u.");
    }
  }
  insertOpenDialog(){
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getList();
      
    });
  }


  delete(){
    if(this.id != null){
    var result = confirm("B???n c?? mu???n x??a row n??y kh??ng?"+ this.id);
      if(result == true){
        this.listProduct.delete(this.id).subscribe(data=>console.log(data));
        alert("X??a b???n ghi th??nh c??ng");
      }
      else{
        alert("B???n kh??ng ?????ng ?? x??a");
        
      }
      this.getList();
      this.product = new Product();
    }
    else{
      var result = confirm("B???n ch??a ch???n ?????i t?????ng. Vui l??ng ch???n ?????i t?????ng v?? th???c hi???n l???i y??u c???u.");
    }
  }
  
  
}

