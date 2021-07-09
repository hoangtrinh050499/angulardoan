
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CustomerEmployeeComponent, Employee } from '../../class/customer-employee/customer-employee.component';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [Employee,CustomerEmployeeComponent]
})
export class AddEmployeeComponent implements OnInit {

  url :any;

  private id :number;
  constructor(private activatedRouter : ActivatedRoute,
    private EmployeeComponent : CustomerEmployeeComponent,
    public emp : Employee,
    @Inject(MAT_DIALOG_DATA) public data :{
      emp :Employee
    },
    public dialogRef : MatDialogRef<AddEmployeeComponent>
    ) { }

  

  ngOnInit(): void {
    
    // this.get();

  }

  get(){
    this.id = Number(this.activatedRouter.snapshot.queryParamMap.get('id'));
    this.EmployeeComponent.getEmpId(this.id).subscribe(data=>{this.emp = data});
  }

  onFileSelected(event: any){
    console.log("image");
    if(event.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload=(event:any)=>{
          this.url = event.target.result;

      }
    }
  }
  onSubmit(){
    this.EmployeeComponent.putEmp(this.data.emp.id,this.data.emp).subscribe(data=>{console.log(data)});
  }

  onCancle(){
    this.dialogRef.close();
  }

}
