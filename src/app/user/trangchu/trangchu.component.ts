import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { listcart } from 'src/app/admin/class/cartclass/cartclass.component';
import { CategoryclassComponent, TitleCategory } from 'src/app/admin/class/categoryclass/categoryclass.component';
import { Composition, CompositionclassComponent } from 'src/app/admin/class/compositionclass/compositionclass.component';
import { Skintype, SkintypeclassComponent } from 'src/app/admin/class/skintypeclass/skintypeclass.component';
import { Trademark, TrademarkclassComponent } from 'src/app/admin/class/trademarkclass/trademarkclass.component';
import { Shared } from 'src/app/service/shared.service';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
import { DangkiComponent } from '../dangki/dangki.component';
import { Login } from 'src/app/service/login.service';
import {SessionStorageService} from 'ngx-webstorage';
import { Likeservice } from 'src/app/service/like.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css'],
  providers:[Composition,CompositionclassComponent,Skintype,SkintypeclassComponent,
    TrademarkclassComponent,Trademark,TitleCategory, CategoryclassComponent,listcart
  ]
})
export class TrangchuComponent implements OnInit {

  public listcomposition : Array<Composition>;
  public listskintype : Array<Skintype>;
  public listtrademark : Array<Trademark>;
  public listtitlecategory :  Array<TitleCategory>;
  dtuong : Skintype;
  array : Array<listcart>=[];
  public sumsl : number=0;
  dangnhap :string ;
  count=0;
  yeuthich = 0;
  sessionlogin : Login;
  ktra = true;
  constructor(
    private router : Router,
    private compositionclass : CompositionclassComponent,
    private skintypeclass : SkintypeclassComponent,
    private trademarkclass : TrademarkclassComponent,
    private categoryclassComponent: CategoryclassComponent,
    private shared : Shared,
    private dialog : MatDialog,
    private sessionstorage : SessionStorageService,
    private likeservice :Likeservice,
    
  ) {
    this.dangnhap = "";

   }

  

  ngOnInit(): void {
    this.get();

    this.shared.getShared.subscribe(data => {
      this.sumsl = data;
    })
    this.shared.getlogin.subscribe(data=>{
      this.dangnhap = data.username
    })
    this.shared.getSharedlike.subscribe(data=>{this.yeuthich = data})

  }

  get(){
    this.compositionclass.get().subscribe(data => {this.listcomposition = data});
    this.skintypeclass.get().subscribe(data => {this.listskintype = data});
    this.trademarkclass.getTrademark().subscribe(data=> {this.listtrademark = data});
    this.categoryclassComponent.gettitle().subscribe(data=>{this.listtitlecategory = data});

    this.array = JSON.parse(localStorage.getItem("cart") || '[]');
    for(let i of this.array){
      
      this.sumsl+= i.sl;
    }
    this.sessionlogin = JSON.parse(sessionStorage.getItem("login")|| '[]');
    this.dangnhap = this.sessionlogin.username;
    
    this.likeservice.getcountlike(this.sessionlogin.id).subscribe(data=>{
      this.yeuthich = data;
    });
    
  }

  checkrow(item : any){
  //   if(this.product === item){
  //       this.product = new Product();
  //       this.id = null;
  //   }
  //   else{
  //     this.product = item;
  //     this.id = item.id;
  //   }
  //  this.router.navigate(['/vandeda'],{queryParams:{id : item.id}});
    //  this.skintypeclass.setdtuong(item);
  }
  vandeda(id : number){
    this.shared.setsharedvandeda(id);
  }

  thanhphanda(id : number){
    this.shared.setsharedthanhphan(id);
  }

  thuonghieu(id : number){
    this.shared.setsharedthuonghieu(id);
  }

  login(){

    const dialogRef = this.dialog.open(DangnhapComponent,{
    
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.pro = result;
    });
  }

  dangki(){
    const dialogRef = this.dialog.open(DangkiComponent,{
          width : '35%',
          height : '50%',
          
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.pro = result;
    });
  }


}
