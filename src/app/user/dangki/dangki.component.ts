import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { Customer } from 'src/app/admin/class/customer-employee/customer-employee.component';
import { Dangki, DangkiService } from 'src/app/service/dangki.service';
import { Login } from 'src/app/service/login.service';

@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {

  dangki :Dangki;
  name : string;
  email : string;
  phone :string;
  password : string="";
  cusdto : Customer;
  constructor(
    private danhkiservice : DangkiService,
    private localstorage : LocalStorageService,
  ) {
    
   }

  ngOnInit(): void {
    this.dangki =  new Dangki();
  }
  submit(){
    
    this.dangki.name = this.name;
    this.dangki.email =this.email;
    this.dangki.phone =this.phone;
    this.dangki.address = "";
    this.dangki.account = new Login();
    this.dangki.account.username = this.email;
    this.dangki.account.password = this.password;
    this.dangki.account.idtitle = 2;
    console.log(this.dangki);
    this.danhkiservice.postdangki(this.dangki).subscribe(data => {
      // console.log(data)
      this.cusdto = new Customer();
      this.cusdto.id = Number(data);
      this.cusdto.name = this.name;
      this.cusdto.email = this.email;
      this.cusdto.phone = this.phone;
      this.cusdto.address = "";
      localStorage.setItem("thongtin",JSON.stringify(this.cusdto));
    })
    // this.cusdto = new Customer();
    // this.cusdto.
    // 
  }

}
