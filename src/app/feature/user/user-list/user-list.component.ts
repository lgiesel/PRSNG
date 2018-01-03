import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string = 'User List';
  selectedSortKey: string = 'Id'; //default sort - can chg to another value
  sortDesc: string = 'asc';
  sortKeys: string[] = User.sortableKeys;
  users: User[];

  constructor(private UserSvc: UserService) { }

  ngOnInit() {
  	this.UserSvc.list()
  		.subscribe(users => {
  			this.users = users;
  	console.log(users);
  });
}