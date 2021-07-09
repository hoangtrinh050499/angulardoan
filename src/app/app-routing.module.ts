import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryclassComponent } from './admin/class/categoryclass/categoryclass.component';
import { AddCategoryComponent } from './admin/ChucNang/add-category/add-category.component';
import { AddTrademarkComponent } from './admin/ChucNang/add-trademark/add-trademark.component';
import { ProductsComponent } from './admin/products/products.component';
import { SupplierComponent } from './admin/supplier/supplier.component';
import { TongquanComponent } from './admin/tongquan/tongquan.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { SettingComponent } from './admin/setting/setting.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { ImportComponent } from './admin/import/import.component';
import { OrderComponent } from './admin/order/order.component';
import { ImportdetailComponent } from './admin/import/importdetail/importdetail.component';
import { InsertUpdateImportComponent } from './admin/import/insert-update-import/insert-update-import.component';
import { UserComponent } from './user/user.component';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { DanhsachproductComponent } from './user/danhsachproduct/danhsachproduct.component';
import { ProductdetailComponent } from './user/productdetail/productdetail.component';
import { VandedaComponent } from './user/vandeda/vandeda.component';
import { ThanhphanComponent } from './user/thanhphan/thanhphan.component';
import { ThuonghieuComponent } from './user/thuonghieu/thuonghieu.component';
import { AdminComponent } from './admin/admin.component';
import { GiohangComponent } from './user/giohang/giohang.component';
import { TrangchuComponent } from './user/trangchu/trangchu.component';
import { TaiKhoanComponent } from './user/tai-khoan/tai-khoan.component';

const routes: Routes = [

  {path:'', component:AdminComponent},
  {path : 'tongquan', component : TongquanComponent},
  {path:'products' , component:ProductsComponent},
  {path: 'trademark', component:AddTrademarkComponent},
  {path : 'category', component : AddCategoryComponent},
  {path : 'supplier', component : SupplierComponent},
  {path : 'customer', component : CustomerComponent},
  {path : 'employee', component : EmployeeComponent,
  children :
    [
      {
        path : 'update',
        component : AddEmployeeComponent
      }
    ]
},
  {path : 'setting' , component : SettingComponent},
  {path : 'import', component : ImportComponent,
  children:[
    {
      path : 'detail',
      component: ImportdetailComponent
    },
    {
      path : 'insert',
      component : InsertUpdateImportComponent
    },
    {
      path : 'update',
      component : InsertUpdateImportComponent
    }
  ]},
  {path : 'order' , component : OrderComponent},


  // User

  {path : "hnskincare.vn" , component : HomeuserComponent},
  {path : 'productlist' , component : DanhsachproductComponent},
  {path : 'productdetail' , component : ProductdetailComponent},
  {path: 'vandeda', component : VandedaComponent},
  {path : 'thanhphan' , component : ThanhphanComponent},
  {path : 'thuonghieu' , component : ThuonghieuComponent},
  {path : 'giohang' , component: GiohangComponent},
  {path : 'taikhoan', component: TaiKhoanComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
