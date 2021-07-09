import { Component, OnInit } from '@angular/core';
import { Checklogin, Login } from 'src/app/service/login.service';
import { Shared } from 'src/app/service/shared.service';
import {SessionStorageService} from 'ngx-webstorage';
import { Likeservice } from 'src/app/service/like.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  login : Login;
  username :string;
  password : string;
  constructor(
    private checklogin :Checklogin,
    private shared : Shared,
    private sessionstorage : SessionStorageService,
    private likeservice :Likeservice,
  ) { 
    this.login = new Login();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.checklogin.checklogin(this.username,this.password).subscribe(data =>{
      this.login = data
      if(data === null){
        var result = confirm("Thông tin tài khoản hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại?");
        // if(result == true){
        
        //   alert("Xóa bản ghi thành công");
        // }
        // else{
        //   alert("Bạn không đồng ý xóa");
          
        // }
      }
      else{
        this.shared.setlogin(data);
        sessionStorage.setItem("login",JSON.stringify(data));
        this.likeservice.getcountlike(data.id).subscribe(data=>{
          this.shared.setsharedlike(data);
        });
      }
    })


    



  }

}
