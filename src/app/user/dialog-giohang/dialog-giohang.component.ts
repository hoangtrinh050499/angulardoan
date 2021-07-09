import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { listcart } from 'src/app/admin/class/cartclass/cartclass.component';

@Component({
  selector: 'app-dialog-giohang',
  templateUrl: './dialog-giohang.component.html',
  styleUrls: ['./dialog-giohang.component.css'],
  providers: [listcart ]
})
export class DialogGiohangComponent implements OnInit {

  array : any =[];
  sum : number = 0;
  constructor(  
    private localstorage : LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.array =  JSON.parse(localStorage.getItem('cart') || '[]');
    for(let i of this.array){
      this.sum+= i.pro.price*i.sl;
    }
  }

}
