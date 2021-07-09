import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageproductclass',
  templateUrl: './imageproductclass.component.html',
  styleUrls: ['./imageproductclass.component.css']
})
export class ImageproductclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class Imageprduct{
  image : string;
}