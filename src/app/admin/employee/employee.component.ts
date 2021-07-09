import { Component, OnInit} from '@angular/core';
import { CustomerEmployeeComponent, Employee } from '../class/customer-employee/customer-employee.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {MatDialogConfig} from '@angular/material/dialog/dialog-config';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[Employee,CustomerEmployeeComponent]
})
export class EmployeeComponent implements OnInit {
  public list : Array<Employee>;
  public id :any= null;
  public emp :Employee;
  
  constructor(private customeremployeeComponent : CustomerEmployeeComponent,
    public employee : Employee, private router : Router,
    private activatedRouter : ActivatedRoute,
    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
    this.getlist();
    
  }

  lastname :string;
  hidden : boolean = true;
  Search(){
    if(this.lastname != ""){
      this.list = this.list.filter(res=>{
        return res.lastname.toLocaleLowerCase().match(this.lastname.toLocaleLowerCase());
      });
      this.hidden = false;
    }else if(this.lastname == ""){
      this.ngOnInit();
      this.hidden = true;
    }
    
  }

  getlist(){
    this.list = new Array<Employee>();
    this.customeremployeeComponent.getEmp().subscribe(data=> this.list = data);
    this.router.navigate(['/employee'])
  }
  checkrow(item : Employee){
    if(this.employee === item){
        this.employee = new Employee();
        this.id = null;
    }
    else{
      this.employee = item;
      this.id = item.id;
    }
    this.router.navigate(['/employee'],{queryParams:{id : this.id}});
  }
  delete(){
    var result = confirm("Bạn có muốn xóa row này không?"+ this.id);
      if(result == true){
        this.customeremployeeComponent.deleteEmp(this.employee.id).subscribe(data=>console.log(data));
        alert("Xóa bản ghi thành công");
      }
      else{
        alert("Bạn không đồng ý xóa");
        
      }
      this.getlist();
      this.employee = new Employee();
  }
  
  openDialog(){
    // this.router.navigate(['/employee/update'],{queryParams:{id : this.id}});
    if(this.id != null){
      const dialogRef = this.dialog.open(AddEmployeeComponent,{
        data : {
            emp : this.employee
          }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.emp = result;
      });
    }
    else{
      var result = confirm("Bạn chưa chọn đối tượng. Vui lòng chọn đối tượng và thực hiện lại yêu cầu.");
    }
  }

  deleteTrademark(){
    var result = confirm("Bạn có muốn xóa row này không?"+ this.id);
      if(result == true){
        this.customeremployeeComponent.deleteEmp(this.id).subscribe(data=>console.log(data));
        alert("Xóa bản ghi thành công");
      }
      else{
        alert("Bạn không đồng ý xóa");
        
      }
      this.getlist();
  }


}
