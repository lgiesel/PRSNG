import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title: string = 'User Edit';
  Id: string;
  resp: any;
  user: User;	  
  
  change(){
    console.log(this.user);
  	this.UserSvc.update(this.user)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("User-Change:", this.resp);
  			this.router.navigate(['/user/list']);
  		});
  }

  constructor(private UserSvc: UserService,
  	          private router: Router,
  	          private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.Id = parms ['id']); //Must match Id in router
    this.UserSvc.get(this.Id)
      .subscribe(usrs => {
        this.user = usrs.length > 0 ? usrs[0] : null;
        console.log(this.user);
    });
  }
}
