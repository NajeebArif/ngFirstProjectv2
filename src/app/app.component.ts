import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  
  constructor(){
    this.user = new User();
    this.user.name = 'Najeeb Arif',
    this.user.designation = 'Software Developer',
    this.user.address = '123 abc',
    this.user.phone = ['123-123-1234']
  }
}
