import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private svc:TestService, private http:HttpClient){
    svc.printToConsole("Got the service!!!")
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   // let obs = this.http.get('https://api.github.com/users/najeebarif');
    //obs.subscribe((response)=>console.log(response));
  }
}
