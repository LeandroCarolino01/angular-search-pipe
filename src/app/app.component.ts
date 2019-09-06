import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  names:any;

  constructor(){
    this.names =  ['tiger', 'elephant', 'bear', 'panther', 'falcon', 'cat', 'dog']
  }
}

// ['tiger', 'elephant', 'bear', 'panther', 'falcon', 'cat', 'dog']