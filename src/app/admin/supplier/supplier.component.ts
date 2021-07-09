import { Component, OnInit } from '@angular/core';
import { Supplier, SupplierclassComponent } from '../class/supplierclass/supplierclass.component';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
  providers:[SupplierclassComponent,Supplier]
})
export class SupplierComponent implements OnInit {

  public list = new Array<Supplier>();
  public supplier = new Supplier();
  private id: any= null;
  constructor(private supplierclassComponent : SupplierclassComponent,private router : Router,
    private activatedRouter : ActivatedRoute,
    private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getlist();
  }

  getlist(){
    this.supplierclassComponent.get().subscribe(data=>{this.list = data});
    this.router.navigate(['supplier']);
    
  }
  checkrow(item : Supplier){
    if(this.supplier === item){
      this.supplier = new Supplier();
      this.id = null;
    }
    else{
      this.supplier = item;
      this.id = item.id;
    }
    this.router.navigate(['supplier'],{queryParams: {id: this.id}});
  }

  Submit(){
    if(this.id === null){
      this.supplierclassComponent.post(this.supplier).subscribe(data => this.ngOnInit());
      this.supplier = new Supplier(); 
    }
    else{
        this.supplierclassComponent.put(this.id,this.supplier).subscribe(data=> this.ngOnInit());
    }
  }
  delete(){
    var result = confirm("Bạn có muốn xóa row này không?"+ this.id);
      if(result == true){
        this.supplierclassComponent.delete(this.id).subscribe(data=>console.log(data));
        alert("Xóa bản ghi thành công");
      }
      else{
        alert("Bạn không đồng ý xóa");
        
      }
      this.getlist();
      this.supplier = new Supplier();
  }

}
