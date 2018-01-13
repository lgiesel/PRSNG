import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component'; 
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { PrListComponent } from './feature/pr/pr-list/pr-list.component';
import { PrDetailComponent } from './feature/pr/pr-detail/pr-detail.component';
import { PrEditComponent } from './feature/pr/pr-edit/pr-edit.component';
import { PrCreateComponent } from './feature/pr/pr-create/pr-create.component';
import { PrliListComponent } from './feature/prli/prli-list/prli-list.component';
import { PrliCreateComponent } from './feature/prli/prli-create/prli-create.component';
import { PrliEditComponent } from './feature/prli/prli-edit/prli-edit.component';
import { PrliDetailComponent } from './feature/prli/prli-detail/prli-detail.component';
import { PrReviewlistComponent } from './feature/pr/pr-reviewlist/pr-reviewlist.component';
import { PrReviewdetailComponent } from './feature/pr/pr-reviewdetail/pr-reviewdetail.component'; 
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { AboutComponent } from './core/about/about.component'; 

//Order matters: most specific 1st, then general
const routes: Routes = [
	// { path: '', redirectTo: '/home', pathMatch: 'full' }, 
	{ path: '', redirectTo: '/user/login', pathMatch: 'full' }, 
	{ path: 'user/detail/:id', component: UserDetailComponent }, 
	{ path: 'user/edit/:id', component: UserEditComponent },
	{ path: 'user/create', component: UserCreateComponent },
	{ path: 'user/list', component: UserListComponent },
	{ path: 'vendor/detail/:id', component: VendorDetailComponent }, 
	{ path: 'vendor/edit/:id', component: VendorEditComponent },
	{ path: 'vendor/create', component: VendorCreateComponent },
	{ path: 'vendor/list', component: VendorListComponent },
	{ path: 'product/detail/:id', component: ProductDetailComponent }, 
	{ path: 'product/edit/:id', component: ProductEditComponent },
	{ path: 'product/create', component: ProductCreateComponent },
	{ path: 'product/list', component: ProductListComponent },
	{ path: 'pr/list', component: PrListComponent },
	{ path: 'pr/detail/:id', component: PrDetailComponent }, 
	{ path: 'pr/edit/:id', component: PrEditComponent },
	{ path: 'pr/create', component: PrCreateComponent },
	{ path: 'pr/reviewlist', component: PrReviewlistComponent },
	{ path: 'pr/reviewdetail', component: PrReviewdetailComponent },
	{ path: 'prli/list/:id', component: PrliListComponent },
	{ path: 'prli/detail/:id', component: PrliDetailComponent }, 
	{ path: 'prli/edit/:id', component: PrliEditComponent },
	{ path: 'prli/create/:id', component: PrliCreateComponent },
	{ path: 'user/login', component: UserLoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '**', component: UserLoginComponent }
	// { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
