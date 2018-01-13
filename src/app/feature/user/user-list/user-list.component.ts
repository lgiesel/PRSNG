import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string = 'User List';
  selectedSortKey: string = 'Id'; 
  sortDesc: string = 'asc';
  sortKeys: string[] = User.sortableKeys;
  isAdmin: boolean = false;
  users: User[];

  constructor(private UserSvc: UserService,
              private SysSvc: SystemService) { }

  ngOnInit() {
  	this.UserSvc.list()
  		.subscribe(users => {
        this.users = users;
        console.log ('Admin1=' + this.SysSvc.data.user.instance.IsAdmin);
  	    console.log(users);
    });
    console.log("Admin2=" + this.SysSvc.data.user.instance.IsAdmin);        
  }
}  