import { Component, Inject, OnInit } from '@angular/core';
import { Product, ProductclassComponent } from '../../class/productclass/productclass.component';
import {HttpClient} from '@angular/common/http';
import { Trademark, TrademarkclassComponent } from '../../class/trademarkclass/trademarkclass.component';
import { Composition, CompositionclassComponent } from '../../class/compositionclass/compositionclass.component';
import { Category, CategoryclassComponent } from '../../class/categoryclass/categoryclass.component';
import { Skintype, SkintypeclassComponent } from '../../class/skintypeclass/skintypeclass.component';
import { ImageproductclassComponent,Imageprduct } from '../../class/imageproductclass/imageproductclass.component';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import {LocalStorageService} from 'ngx-localstorage';
import {SessionStorageService} from 'ngx-webstorage';
import { Observable } from 'rxjs';
export interface demo{
  id: number;
  nameComposition :string;
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers:[Product,Category,Skintype,Trademark,TrademarkclassComponent,Composition,
    CompositionclassComponent,SkintypeclassComponent,CategoryclassComponent,ProductclassComponent,
    ImageproductclassComponent,Imageprduct]
})

export class AddProductComponent implements OnInit {
  // url : any;
  id : any = null;
  img : Array<string>=[];
  imgarray : Array<string> = [];
  path : string;
  downloadURL: Observable<string>;
  fb: string="url";

  urlimg_product : any[]=[];

  bien : string;

  public listcomposition : Array<Composition>;
  public listtrademark : Array<Trademark>;
  public listcategory : Array<Category>;
  public listskintype :Array<Skintype>;

  

  
  constructor(public pro : Product,
    @Inject(MAT_DIALOG_DATA) public data :{
      pro : Product
  }, 
  private trademark : TrademarkclassComponent,
  private composition :CompositionclassComponent,
  private category :CategoryclassComponent,
  private skintype : SkintypeclassComponent,
  private imageproduct : ImageproductclassComponent,
  private productclassComponent : ProductclassComponent,
  private activatesRouter : ActivatedRoute,
  public dialogRef : MatDialogRef<AddProductComponent>,
  private storage: AngularFireStorage,
  private localstorage : LocalStorageService,
  private sessionstorage : SessionStorageService,
 ) {

  

  }

  ngOnInit(): void {
    this.get();
    this.pro = new Product();
    sessionStorage.setItem("img",JSON.stringify( this.urlimg_product));
  }

  get(){
    this.composition.get().subscribe(data=>{this.listcomposition = data});
    this.trademark.getTrademark().subscribe(data=>this.listtrademark = data);
    this.category.get().subscribe(data=>{this.listcategory = data});
    this.skintype.get().subscribe(data=>{this.listskintype = data});

    this.pro.imageproduct = new Array<string>();
   
  }

  Checkimage(item : string){

    // this.img = item;
    // this.data.pro.image = item;
    // console.log(item);
    // if(this.id != 0 ){
    //   this.data.pro.image = "../assets/img/imgdatn/"+this.data.pro.image;
    // }
  }


  // onFileSelected(event: any){
  //   if(event.target.files){

  //     // this.path = event.target.files[0];
  //     this.img.push( event.target.files[0]);

  //       var reader = new FileReader();
  //         reader.readAsDataURL(event.target.files[0]);
  //       reader.onload=(event:any)=>{
  //         this.imgarray.push(event.target.result);
  //         this.path = event.target.result;
          
  //       }
        
  //   }

  //   // if(event.target.files){
  //   //   for(var i=0;i<File.length;i++){
  //   //     const file = event.target.files[i];
  //   //     var reader = new FileReader();
  //   //     reader.readAsDataURL(file);
  //   //     reader.onload = (event : any ) =>{
  //   //       this.imgarray.push(event.target.result);
  //   //     }
  //   //   }
  //   // }


  // }
  onchangeComposition(event : any){
      this.pro.composition = event;
  }
  onchangeTrademark(event : any){
    this.pro.trademark = event;
  }
  onchangeCategory(event : any){
    this.pro.category = event;
  }
  onchangeSkintype(event : any){
    this.pro.skintype = event;
  }
 
  onCancle(){
    this.dialogRef.close();
  }


  onFileSelected(event:any) {
    var n = Date.now();

    if(event.target.files){

          // // this.path = event.target.files[0];
          // this.img.push( event.target.files[0]);
    
            var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);
            reader.onload=(event:any)=>{
              this.imgarray.push(event.target.result);
              this.path = event.target.result;
              
            }
            
        }



    const file = event.target.files[0];
    console.log(file);
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
    // this.id=Number(this.activatesRouter.snapshot.queryParamMap.get('id'));
    // if(this.id == null){
      // this.com.forEach(element => {
      //   this.composition.getOne(element).subscribe(data=>{this.data.pro.composition.push(data)});
      // });

      // this.trademark.getOne(this.tra).subscribe(data=>{this.data.pro.trademark = data});

      // this.cate.forEach(element => {
      //   this.category.getOne(element).subscribe(data=>{this.data.pro.category.push(data)});
      // });

      // this.data.pro.category = this.cate;
      // this.skin.forEach(element => {
      //   this.skintype.getOne(element).subscribe(data=>{this.data.pro.skintype.push(data)});
      // });
      // this.productclassComponent.post(this.data.pro).subscribe(data=>{console.log(data)});

  


      // console.log(this.fb);

        // for (let index = 0; index < this.img.length; index++) {
        //   this.onFile(this.img[index]);
          
        // }

        
       


        this.pro.discount = 0 ;
        this.pro.price = 0;
        this.pro.imageproduct = JSON.parse(sessionStorage.getItem("img")|| '[]');
        for(let i =0 ; i< this.pro.imageproduct.length;i++){
          this.pro.image = this.pro.imageproduct[i];
          break;
        }
        console.log(this.pro.imageproduct);
        this.productclassComponent.post(this.pro).subscribe(data=>{console.log(data)});

        this.urlimg_product = [];



    // }
    // else{
    //   this.productclassComponent.put(this.data.pro.id,this.data.pro).subscribe(data=>{console.log(data)});
    // }
  }
  

}
