import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Category, CategoryclassComponent, TitleCategory } from '../../class/categoryclass/categoryclass.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers:[Category,CategoryclassComponent,TitleCategory],
})
export class AddCategoryComponent implements OnInit {

  public list = new Array<Category>();
  listtitle  = new Array<TitleCategory>()
  public id: any = null;

  constructor(private category : CategoryclassComponent,
    public catgory : Category,private router  : Router,
    private activateRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.category.get().subscribe(data=>{this.list = data});
    this.category.gettitle().subscribe(data => {this.listtitle = data});
  }

  checkrow(item : Category){
    if(item === this.catgory){
      this.catgory = new Category();
      this.id = null;
    }
    else{
      this.catgory = item;
      this.id = this.catgory.id; 
      
    }
    this.router.navigate(['category'],{queryParams :{id : this.id}});
  }

  Submit(){
      if(this.id === null){
        this.category.post(this.catgory).subscribe(data=>this.ngOnInit());
      }
      else{
        this.category.put(this.id, this.catgory).subscribe(data=>this.ngOnInit());
      }
      this.router.navigate(['category']);
      this.catgory = new Category();
  }
  deleteCategory(){
    var result = confirm("Bạn có muốn xóa row không ?" + this.id);
    if(result === true){
      this.category.delete(this.id).subscribe(data=>console.log(data));
      alert("Delete row thành công");
    }
    else{
      alert("Delete row đã bị hủy");
      
    }
    this.router.navigate(['category']);
    this.getList();
  }

  onchangeSkintype(event : any){
    // this.skin = event;
    console.log(event);
  }

}
