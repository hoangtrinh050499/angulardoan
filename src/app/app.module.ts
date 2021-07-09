import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { TongquanComponent } from './admin/tongquan/tongquan.component';


import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './admin/ChucNang/add-product/add-product.component';
import { AddCategoryComponent } from './admin/ChucNang/add-category/add-category.component';
import { AddTrademarkComponent } from './admin/ChucNang/add-trademark/add-trademark.component';
import {CKEditorModule} from 'ckeditor4-angular';
import { SupplierComponent } from './admin/supplier/supplier.component';
import { SupplierclassComponent } from './admin/class/supplierclass/supplierclass.component';
import { CategoryclassComponent } from './admin/class/categoryclass/categoryclass.component';
import { ProductclassComponent } from './admin/class/productclass/productclass.component';
import { CompositionclassComponent } from './admin/class/compositionclass/compositionclass.component';
import { TrademarkclassComponent } from './admin/class/trademarkclass/trademarkclass.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { CustomerEmployeeComponent } from './admin/class/customer-employee/customer-employee.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { SettingComponent } from './admin/setting/setting.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { SkintypeclassComponent } from './admin/class/skintypeclass/skintypeclass.component';
import { ImageproductclassComponent } from './admin/class/imageproductclass/imageproductclass.component';
import {MatSelectModule} from '@angular/material/select';
import { ImportComponent } from './admin/import/import.component';
import { OrderComponent } from './admin/order/order.component';
import { ImportclassComponent } from './admin/class/importclass/importclass.component';
import { ImportdetailComponent } from './admin/import/importdetail/importdetail.component';
import { InsertUpdateImportComponent } from './admin/import/insert-update-import/insert-update-import.component';
import { UserComponent } from './user/user.component';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { DanhsachproductComponent } from './user/danhsachproduct/danhsachproduct.component';
import { ProductdetailComponent } from './user/productdetail/productdetail.component';
import { GiohangComponent } from './user/giohang/giohang.component';
import { VandedaComponent } from './user/vandeda/vandeda.component';
import { ThanhphanComponent } from './user/thanhphan/thanhphan.component';
import { ThuonghieuComponent } from './user/thuonghieu/thuonghieu.component';
import { DialogGiohangComponent } from './user/dialog-giohang/dialog-giohang.component';
import  { NgxLocalStorageModule }  from  'ngx-localstorage';
import { CartclassComponent } from './admin/class/cartclass/cartclass.component' ; 
import {order} from './admin/class/order.service';
import { TrangchuComponent } from './user/trangchu/trangchu.component';
import { Shared } from './service/shared.service';
import {Login} from './service/login.service';
import {Checklogin} from './service/login.service';
import { DangnhapComponent } from './user/dangnhap/dangnhap.component';
import { DangkiComponent } from './user/dangki/dangki.component';
import { TheodoidonhangComponent } from './user/theodoidonhang/theodoidonhang.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {Likeservice} from './service/like.service';
import {DangkiService} from './service/dangki.service';
import { TaiKhoanComponent } from './user/tai-khoan/tai-khoan.component';
import { OrderdetailComponent } from './admin/order/orderdetail/orderdetail.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { UpdateProductComponent } from './admin/ChucNang/update-product/update-product.component';
import {Dashboard} from './service/dashboard.service';
import { TheodoanhthuComponent } from './admin/tongquan/theodoanhthu/theodoanhthu.component';
import { TheosoluongComponent } from './admin/tongquan/theosoluong/theosoluong.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductsComponent,
    TongquanComponent,
    ProductclassComponent,
    CompositionclassComponent,
    TrademarkclassComponent,
    CategoryclassComponent,
    AddProductComponent,
    AddCategoryComponent,
    AddTrademarkComponent,
    SupplierComponent,
    SupplierclassComponent,
    CustomerComponent,
    CustomerEmployeeComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    SettingComponent,
    SkintypeclassComponent,
    ImageproductclassComponent,
    ImportComponent,
    OrderComponent,
    ImportclassComponent,
    ImportdetailComponent,
    InsertUpdateImportComponent,
    UserComponent,
    HomeuserComponent,
    DanhsachproductComponent,
    ProductdetailComponent,
    GiohangComponent,
    VandedaComponent,
    ThanhphanComponent,
    ThuonghieuComponent,
    DialogGiohangComponent,
    CartclassComponent,
    TrangchuComponent,
    DangnhapComponent,
    DangkiComponent,
    TheodoidonhangComponent,
    TaiKhoanComponent,
    OrderdetailComponent,
    UpdateProductComponent,
    TheodoanhthuComponent,
    TheosoluongComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxLocalStorageModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    AngularFireStorageModule,

  ],
  entryComponents : [
    AddEmployeeComponent,
    AddProductComponent,
    DangnhapComponent,
    DangkiComponent,
    TheodoidonhangComponent,
  ],
  exports:[
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,

 
  ],
  providers: [MatDatepickerModule,order,Shared,Login,Checklogin,Likeservice,DangkiService, Dashboard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
