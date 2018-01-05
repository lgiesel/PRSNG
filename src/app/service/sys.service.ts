import { Injectable } from '@angular/core';


@Injectable()
export class SystemService {

  data = {
      about: 'System Service',
      user: {
          loggedIn: false,
          instance: null
      },
    };

  get debug() { return this.data; }
  //get in front of method,  by using 'get'... looks like method but treat like var... 
  //can put onto a form to debug

  constructor() { } 

}
