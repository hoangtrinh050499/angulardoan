import { Component, OnInit } from '@angular/core';
import { Import, ImportclassComponent } from '../class/importclass/importclass.component';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ImportdetailComponent } from './importdetail/importdetail.component';
import { InsertUpdateImportComponent } from './insert-update-import/insert-update-import.component';
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
  providers :[Import, ImportclassComponent]
})
export class ImportComponent implements OnInit {

  public list : Import[] = [];
  public import = new Import();
  public id : any;
  public imp : Import;
  constructor(private importclass : ImportclassComponent,
    private router :Router,
    private dialog :MatDialog
    
    
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.importclass.get().subscribe(data => {this.list = data});
    this.router.navigate(['/import']);
  }
  checkrow(item : any){
    if(this.import === item){
        this.import = new Import();
        this.id = null;
    }
    else{
      this.import = item;
      this.id = item.id;
    }
    this.router.navigate(['/import'],{queryParams:{id : this.import.id}});
  }

  ADDImport(){
    this.router.navigate(['/import/insert']);
      const dialogRef = this.dialog.open(InsertUpdateImportComponent,{
        data : {
          imp :this.import = new Import()
       }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.imp = result;
        console.log(this.imp);
        this.router.navigate(['/import']);
      });
  }
  UpdateImport(){}
  DeleteImport(){}
  DetalImport(){
    this.router.navigate(['/import/detail'],{queryParams:{id : this.id}});
    if(this.id != null){
      const dialogRef = this.dialog.open(ImportdetailComponent,{
        data : {
             imp :this.import
          }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      });
    }
    else{
      var result = confirm("Bạn chưa chọn đối tượng. Vui lòng chọn đối tượng và thực hiện lại yêu cầu.");
    }
    
  }





}
