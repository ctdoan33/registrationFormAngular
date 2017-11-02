import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  last_user = null;
  registered = false;
  onSubmit(){
	  this.last_user = this.user;
	  this.registered = true;
	  this.user = new User();
  }
}
