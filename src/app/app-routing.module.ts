import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [//Order matters: most specific 1st, then general
	{ path: 'user/detail/:id', component: UserDetailComponent }, //id matches url id
	{ path: 'user/edit/:id', component: UserEditComponent },
	{ path: 'user/create', component: UserCreateComponent },
	{ path: 'user/list', component: UserListComponent },
	{ path: 'vendor/detail/:id', component: VendorDetailComponent }, //id matches url id
	{ path: 'vendor/edit/:id', component: VendorEditComponent },
	{ path: 'vendor/create', component: VendorCreateComponent },
	{ path: 'vendor/list', component: VendorListComponent },
	{ path: 'product/detail/:id', component: ProductDetailComponent }, //id matches url id
	{ path: 'product/edit/:id', component: ProductEditComponent },
	{ path: 'product/create', component: ProductCreateComponent },
	{ path: 'product/list', component: ProductListComponent }
];
	
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
