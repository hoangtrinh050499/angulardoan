import { Component, OnInit } from '@angular/core';
import { CategoryclassComponent, TitleCategory } from '../admin/class/categoryclass/categoryclass.component';
import { Composition, CompositionclassComponent } from '../admin/class/compositionclass/compositionclass.component';
import { Skintype, SkintypeclassComponent } from '../admin/class/skintypeclass/skintypeclass.component';
import { Trademark, TrademarkclassComponent } from '../admin/class/trademarkclass/trademarkclass.component';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { listcart } from '../admin/class/cartclass/cartclass.component';
import { VandedaComponent } from './vandeda/vandeda.component';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[Composition,CompositionclassComponent,Skintype,SkintypeclassComponent,
    TrademarkclassComponent,Trademark,TitleCategory, CategoryclassComponent,listcart
  ]
})


export class UserComponent implements OnInit, OnDestroy {

  public listcomposition : Array<Composition>;
  public listskintype : Array<Skintype>;
  public listtrademark : Array<Trademark>;
  public listtitlecategory :  Array<TitleCategory>;
  dtuong : Skintype;
  array : Array<listcart>=[]
  public sumsl : number=0;

  private valueFromChildSubscription: Subscription;

  constructor(
    private router : Router,
    private compositionclass : CompositionclassComponent,
    private skintypeclass : SkintypeclassComponent,
    private trademarkclass : TrademarkclassComponent,
    private categoryclassComponent: CategoryclassComponent,
  ) {
    

   }

  ngOnDestroy() {
    this.valueFromChildSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.get();


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
  vandeda(id : any){
    // this.router.navigate(['/vandeda'],{queryParams:{id : id}, relativeTo : this.router });
  }

  countChange(event: any) {
    this.sumsl = event;
  }

} 

