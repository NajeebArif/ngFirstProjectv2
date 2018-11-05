import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
 

  constructor() { 
    this.user = {
      name: 'Foo Bar',
      title:'Software Developer',
      address:'1234 Main Street, City, State, 111111, India',
      phone:['123-123-1234','456-4546-4567']
    }
  }

  ngOnInit() {
  }

}
