import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { CustomerEmployeeComponent, Employee } from '../../class/customer-employee/customer-employee.component';
import { Import, ImportclassComponent, Importdetail } from '../../class/importclass/importclass.component';
import { Product, ProductclassComponent } from '../../class/productclass/productclass.component';
import { Supplier, SupplierclassComponent } from '../../class/supplierclass/supplierclass.component';
import {ActivatedRoute} from '@angular/router';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-insert-update-import',
  templateUrl: './insert-update-import.component.html',
  styleUrls: ['./insert-update-import.component.css'],
  providers:[Import,Employee,Supplier,Product,CustomerEmployeeComponent,
    SupplierclassComponent,ProductclassComponent,Importdetail,
    ImportclassComponent,
    // {provide: MAT_DATE_FORMATS, useValue: 'yyyy-mm-dd'}
  ]
})
export class InsertUpdateImportComponent implements OnInit {

  public listemployee : Array<Employee>;
    public listsupplier :Array<Supplier>;
    public listproduct : Array<Product>;
    hidden = false;
    private id :any;

    listimportdetail : any[]=[];
  constructor(
    public imp : Import,
    // @Inject(MAT_DIALOG_DATA) public data :{
    //   imp : Import
    // },
    
    private customeremployeeComponent : CustomerEmployeeComponent,
    private supplierclassComponent : SupplierclassComponent,
    private productclassComponent : ProductclassComponent,
    private activatedRoute :ActivatedRoute,
    public importdetail : Importdetail,
    public dialogRef : MatDialogRef<InsertUpdateImportComponent>,
    private importclassComponent : ImportclassComponent,
  ) { }

  ngOnInit(): void {
   this.getlist();
  }

  getlist(){
    this.id = Number(this.activatedRoute.snapshot.queryParamMap.get("id"));
    console.log(this.id);
    this.customeremployeeComponent.getEmp().subscribe(result=> {this.listemployee = result});
    this.supplierclassComponent.get().subscribe(result=>{this.listsupplier = result});
    this.productclassComponent.getProduct().subscribe(result => {this.listproduct = result});
    if(this.id != 0){
      this.hidden = true;
    }
    
  }

  addlistImportdetail(){

    this.importdetail.nsx=formatDate(this.importdetail.nsx, "yyyy-MM-dd", 'en-GB');

    this.importdetail.exp=formatDate(this.importdetail.exp, "yyyy-MM-dd", 'en-GB');

    this.importdetail.thanhtien = this.importdetail.quantityimport*this.importdetail.unitpriceimport;
    this.listimportdetail.push(this.importdetail);
    console.log(this.importdetail.nsx);
    console.log(this.importdetail.exp);
    this.importdetail = new Importdetail();

 

    
  }


  onSubmit(){
    // var event = new Date(this.imp.date);
    // this.imp.date=event.toLocaleDateString (). slice (0,10);

    this.imp.date=formatDate(this.imp.date, "yyyy-MM-dd", 'en-GB');
    console.log(this.imp.date)


    this.imp.importdetaildto = this.listimportdetail;
    console.log(this.imp);
    this.importclassComponent.postimport(this.imp).subscribe(data=>console.log(data));

  }

  onCancle(){
    this.dialogRef.close();
  }

}


