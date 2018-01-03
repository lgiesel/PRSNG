import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

const routes: Routes = [//Order matters: most specific 1st, then general
	{ path: 'user/detail/:id', component: UserDetailComponent }, //id matches url id
	{ path: 'user/edit/:id', component: UserEditComponent },
	{ path: 'user/create', component: UserCreateComponent },
	{ path: 'user/list', component: UserListComponent },
];
	
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
