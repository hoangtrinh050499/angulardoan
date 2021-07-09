import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Trademark, TrademarkclassComponent } from '../../class/trademarkclass/trademarkclass.component';


@Component({
  selector: 'app-add-trademark',
  templateUrl: './add-trademark.component.html',
  styleUrls: ['./add-trademark.component.css'],
  providers:[Trademark,TrademarkclassComponent]
})
export class AddTrademarkComponent implements OnInit {

  public list = new Array<Trademark>();
  private id:any;
  // nameTrademark : string;
  // content : string;
  public tdm = new Trademark();

  constructor(
    private trademark : TrademarkclassComponent,
    private router : Router, 
    private activatedRoute : ActivatedRoute
    ) {
      this.tdm = new Trademark();
     }
  
  ngOnInit(): void {
    // this.id=Number(this.activatedRoute.snapshot.queryParamMap.get('id'));
    // this.trademark.getOne(this.id).subscribe(data => {this.checkrow(data)});
    this.getList();
    
  }
  
  getList(){
 
    this.trademark.getTrademark().subscribe(data => {this.list = data
    console.log(data)
    });
    this.router.navigate(['trademark']);
    this.tdm = new Trademark();
  }

  Submit(){
    if(this.id == null){
      this.trademark.post(this.tdm).subscribe(data=> this.ngOnInit());
      this.tdm = new Trademark();
    }
    else{
      this.trademark.put(this.id,this.tdm).subscribe(data=> this.ngOnInit());
    }

    console.log(this.tdm);
  }
  deleteTrademark(){
    var result = confirm("Bạn có muốn xóa row này không?"+ this.id);
      if(result == true){
        this.trademark.delete(this.id).subscribe(data=>console.log(data));
        alert("Xóa bản ghi thành công");
      }
      else{
        alert("Bạn không đồng ý xóa");
        
      }
    this.router.navigate(['trademark']);
    this.getList();
  }

  checkrow(trademark : Trademark){
    if(trademark === this.tdm){
      this.tdm = new Trademark();
      this.id = 0;
    }
    else{
      this.tdm = trademark;
      this.id = this.tdm.id; 
      
    }
    this.router.navigate(['trademark'],{queryParams :{id : this.tdm.id}});
  }

  htmltotext(html: string) {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
}

}
export class CKEComponent{
  public model={
    editor:''
  }
}

// @Pipe({
//   name : 'htmlToPlaintext'
// })

// export class htmlToPlaintextPipe implements PipeTransform{
//   transform(value : any) : string {
//       const temp = document.createElement('td');
//       temp.innerHTML = value;
//       return temp.textContent || temp.innerText || '';
//   }
// }