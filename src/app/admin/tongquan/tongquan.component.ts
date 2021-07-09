import { Component, OnInit } from '@angular/core';
import { Dashboard, Dashboardclass } from 'src/app/service/dashboard.service';
declare var $:any
@Component({
  selector: 'app-tongquan',
  templateUrl: './tongquan.component.html',
  styleUrls: ['./tongquan.component.css']
})
export class TongquanComponent implements OnInit {

  tongtiennhap : number;
  tongtienban  :number;
  tonghoadon : number;
  tongkhachhang : number;
  tonghoadonhoanthanh : number;
  tongdonhanghuy : number;
  arraytopsanpham : Array<Dashboardclass>;
  constructor(
    private dashboard : Dashboard
  ) { }

  ngOnInit(): void {
    let d = new Date();
    console.log(d.getMonth())
    this.dashboard.gettongtiennhap(d.getMonth()).subscribe(data=> this.tongtiennhap = data);
    this.dashboard.gettongtienban(d.getMonth()).subscribe(data => this.tongtienban = data);
    this.dashboard.gettonghoadon(d.getMonth()).subscribe(data => this.tonghoadon = data);
    this.dashboard.gettongkhachhang(d.getMonth()).subscribe(data => this.tongkhachhang = data);
    this.dashboard.gettonghoadonhoanthanh(d.getMonth()).subscribe(data => this.tonghoadonhoanthanh = data);
    this.dashboard.gettonghoadonhuy(d.getMonth()).subscribe(data => this.tongdonhanghuy = data);
    this.dashboard.gettopdoangthu().subscribe(data=> {this.arraytopsanpham = data,
      console.log(data)}
      );
  }

  soluong(){
    this.dashboard.gettopsoluong().subscribe(data=> this.arraytopsanpham = data);
  }
  doanhthu(){
    this.dashboard.gettopdoangthu().subscribe(data=> this.arraytopsanpham = data);
  }


 

}
