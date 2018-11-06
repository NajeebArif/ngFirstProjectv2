import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userName: string;
  resp: Object;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  search(){
    this.http.get('https://api.github.com/users/'+this.userName)
    .subscribe((resp)=>{
      this.resp = resp;
      console.log(this.resp);
    })
  }

}
