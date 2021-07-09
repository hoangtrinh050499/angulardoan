import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Category, CategoryclassComponent } from '../../class/categoryclass/categoryclass.component';
import { Composition, CompositionclassComponent } from '../../class/compositionclass/compositionclass.component';
import { Product, ProductclassComponent } from '../../class/productclass/productclass.component';
import { Skintype, SkintypeclassComponent } from '../../class/skintypeclass/skintypeclass.component';
import { Trademark, TrademarkclassComponent } from '../../class/trademarkclass/trademarkclass.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
  providers:[Product,Category,Skintype,Trademark,TrademarkclassComponent,Composition,
    CompositionclassComponent,SkintypeclassComponent,CategoryclassComponent,ProductclassComponent,
    ]
})
export class UpdateProductComponent implements OnInit {

  id : any = null;
  img : Array<string>=[];
  imgarray : Array<string> = [];
  path : string;
  downloadURL: Observable<string>;
  fb: string="url";

  urlimg_product : any[]=[];

  com : number[]=[];
  skin : number[]=[];

  public listcomposition : Array<Composition>;
  public listtrademark : Array<Trademark>;
  public listcategory : Array<Category>;
  public listskintype :Array<Skintype>;

  

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data :{
      pro : Product
  }, 
  private trademark : TrademarkclassComponent,
  private composition :CompositionclassComponent,
  private category :CategoryclassComponent,
  private skintype : SkintypeclassComponent,
  private productclassComponent : ProductclassComponent,
  private activatesRouter : ActivatedRoute,
  public dialogRef : MatDialogRef<UpdateProductComponent>,
  private storage: AngularFireStorage,
  private localstorage : LocalStorageService,
  private sessionstorage : SessionStorageService,
 ) {

  

  }

  ngOnInit(): void {
    this.get();

    // sessionStorage.setItem("img",JSON.stringify( this.urlimg_product));
  }

  get(){
    this.composition.get().subscribe(data=>{this.listcomposition = data});
    this.trademark.getTrademark().subscribe(data=>this.listtrademark = data);
    this.category.get().subscribe(data=>{this.listcategory = data});
    this.skintype.get().subscribe(data=>{this.listskintype = data});
    this.imgarray= this.data.pro.imageproduct;
    this.path = this.data.pro.image;



    for(let i = 0 ; i < this.data.pro.composition.length;i++){
      this.com.push(this.data.pro.composition[i].id);
    }
    for(let i = 0 ; i < this.data.pro.skintype.length;i++){
      this.skin.push(this.data.pro.skintype[i].id);
    }

  }

  Checkimage(item : string){

    // this.img = item;
    // this.data.pro.image = item;
    // console.log(item);
    // if(this.id != 0 ){
    //   this.data.pro.image = "../assets/img/imgdatn/"+this.data.pro.image;
    // }
  }

  onchangeComposition(event : any){
      this.com = event;
      this.data.pro.composition = [];
      for(let i = 0 ; i < this.com.length;i++){
        this.composition.getOne(this.com[i]).subscribe(data => {
          this.data.pro.composition.push(data);
        })
      }
  }
  onchangeTrademark(event : any){
    this.trademark.getOne(event).subscribe(data => {
      this.data.pro.trademark = data
    })
  }
  onchangeCategory(event : any){
    this.category.getOne(event).subscribe(data=>{
      this.data.pro.category = data
    })
   
  }
  onchangeSkintype(event : any){
    this.skin = event;
    this.data.pro.skintype = [];
      for(let i = 0 ; i < this.skin.length;i++){
        this.skintype.getOne(this.com[i]).subscribe(data => {
          this.data.pro.skintype.push(data);
        })
      }
  }
 
  onCancle(){
    this.dialogRef.close();
  }


  onFileSelected(event:any) {
    var n = Date.now();

    // if(event.target.files){
    
    //         var reader = new FileReader();
    //           reader.readAsDataURL(event.target.files[0]);
    //         reader.onload=(event:any)=>{
    //           this.imgarray.push(event.target.result);
    //           this.path = event.target.result;
              
    //         }
            
    //     }



    const file = event.target.files[0];
    const filePath = `image/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`image/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
             
            }
         
            this.urlimg_product.push( this.fb);
            sessionStorage.setItem("img",JSON.stringify( this.urlimg_product));

          });
        })
      )
      .subscribe((url: any) => {
        if (url) {
          // console.log(url);
          
        }
      });


      
  }
  onSubmit(){

    console.log(this.data.pro);
    this.productclassComponent.put(this.data.pro.id,this.data.pro).subscribe(data=>console.log(data));
    
  }
  

}
