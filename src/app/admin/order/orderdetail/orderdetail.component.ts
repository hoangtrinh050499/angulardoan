import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DatHang, DatHangdetail, order } from '../../class/order.service';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css'],
  providers:[DatHang,order]
})
export class OrderdetailComponent implements OnInit {

  listdathangdetail  : Array<DatHangdetail>;
  constructor(
    @Inject(MAT_DIALOG_DATA)public data :{ dathangdetail : DatHang },
    private order : order,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.order.getorderdetail(this.data.dathangdetail.id).subscribe(data => {this.listdathangdetail = data,
    console.log(data)
    } );
  }

}
