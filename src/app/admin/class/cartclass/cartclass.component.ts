import { Component, OnInit } from '@angular/core';
import { Product } from '../productclass/productclass.component';

@Component({
  selector: 'app-cartclass',
  templateUrl: './cartclass.component.html',
  styleUrls: ['./cartclass.component.css']
})
export class CartclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class listcart{
  pro : Product;
  sl : number;
}