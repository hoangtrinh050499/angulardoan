import { Component, Inject, OnInit } from '@angular/core';
import { DatHang, order } from '../class/order.service';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers:[DatHang,order]
})
export class OrderComponent implements OnInit {

  listdathang : Array<DatHang> = new Array();
  dathang : DatHang;
  id : any;
  constructor(
    private order : order,
    private dialog : MatDialog,
    
  ) {
    this.dathang = new DatHang();
  }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.order.getorder().subscribe(data=>{this.listdathang = data
    });
  }

  checkrow(item : DatHang){
    if(this.dathang === item){
        this.dathang = new DatHang();
        this.id = null;
    }
    else{
      this.dathang = item;
      this.id = item.id;
    }
  }
  detail(){

    const dialog = this.dialog.open(OrderdetailComponent,{
        data : {
          dathangdetail  : this.dathang
        }
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
