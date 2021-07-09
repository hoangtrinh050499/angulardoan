import { Component, OnInit } from '@angular/core';
import { Customer, CustomerEmployeeComponent } from '../class/customer-employee/customer-employee.component';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[Customer, CustomerEmployeeComponent]
})
export class CustomerComponent implements OnInit {

  public list!: Array<Customer>;
  constructor(private CustomerEmployee : CustomerEmployeeComponent,public customer: Customer) { }

  ngOnInit(): void {
    this.list = new Array<Customer>();
    this.getlist();
  }
  getlist(){
    this.CustomerEmployee.get().subscribe(data => this.list = data);
  }

  checkrow(item : Customer){}

  lastname :string;
  Search(){
    this.list = this.list.filter(res=>{
      return this.lastname.toLocaleLowerCase().match(this.lastname.toLocaleLowerCase());
    });

    if(this.lastname != ""){
      this.list = this.list.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.lastname.toLocaleLowerCase());
      });
    }else if(this.lastname == ""){
      this.ngOnInit();
    }


  }

}
