import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './core/home/home.component'; 
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { VendorService } from './service/vendor.service';
import { ProductService } from './service/product.service';
import { PrService } from './service/pr.service';
import { PrliService } from './service/prli.service';
import { StatusService } from './service/status.service';
import { SystemService } from './service/system.service';
import { MenuComponent } from './core/menu/menu.component';
import { SortPipe } from './util/sort-pipe';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { PrListComponent } from './feature/pr/pr-list/pr-list.component';
import { PrDetailComponent } from './feature/pr/pr-detail/pr-detail.component';
import { PrEditComponent } from './feature/pr/pr-edit/pr-edit.component';
import { PrCreateComponent } from './feature/pr/pr-create/pr-create.component';
import { PrliListComponent } from './feature/prli/prli-list/prli-list.component';
import { PrliCreateComponent } from './feature/prli/prli-create/prli-create.component';
import { PrliEditComponent } from './feature/prli/prli-edit/prli-edit.component';
import { PrliDetailComponent } from './feature/prli/prli-detail/prli-detail.component';
import { AboutComponent } from './core/about/about.component'; 
   
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    MenuComponent,
    SortPipe,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    VendorDetailComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    UserLoginComponent,
    PrListComponent,
    PrDetailComponent,
    PrEditComponent,
    PrCreateComponent,
    PrliListComponent,
    PrliCreateComponent,
    PrliEditComponent,
    PrliDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, VendorService, ProductService, StatusService,
              PrService, PrliService, SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
