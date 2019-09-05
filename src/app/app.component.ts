import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names:any;
  constructor(){
    this.names = ['Prashobh','Abraham','Anil','Sam','Natasha','Marry','Zian','karan']
  }
}
