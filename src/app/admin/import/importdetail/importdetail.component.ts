import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { Import, ImportclassComponent, Importdetail } from '../../class/importclass/importclass.component';
@Component({
  selector: 'app-importdetail',
  templateUrl: './importdetail.component.html',
  styleUrls: ['./importdetail.component.css'],
  providers:[Importdetail,Import,ImportclassComponent]

})
export class ImportdetailComponent implements OnInit {

  importdetails : Importdetail[] = [];
  constructor(public imp : Importdetail,
    @Inject(MAT_DIALOG_DATA) public data :{
      imp : Import
    },
    public dialogRef : MatDialogRef<ImportdetailComponent>,
    private importclassComponent : ImportclassComponent
  ) { }

  ngOnInit(): void {
    
    this.get();
    console.log(this.imp)
    
  }
  get(){
    this.importclassComponent.getidbill(this.data.imp.id).subscribe(data=>{this.importdetails=data});
  }



}
