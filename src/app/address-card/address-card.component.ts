import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName: string;

  constructor() { 
   
  }

  ngOnInit() {
    this.user = {
      name: this.userName,
      title:'Software Developer',
      address:'1234 Main Street, City, State, 111111, India',
      phone:['123-123-1234','456-4546-4567']
    };
  }

}
