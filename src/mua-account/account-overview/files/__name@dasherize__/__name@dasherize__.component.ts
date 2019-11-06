import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log('hello its me');
  }

}
