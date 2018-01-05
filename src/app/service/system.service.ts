import { Injectable } from '@angular/core';

@Injectable()
export class SystemService {

	data = {
		about: 'System Service',
		user: {
			loggedIn: false,
			instance: null
		},
		displayMenu: true
	};

	get debug() { return this.data; }

  constructor() { }

}
