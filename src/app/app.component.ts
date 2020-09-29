import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  themes = [
    {
      name: 'Default',
      class: 'app-default-theme'
    }, {
      name: 'Google',
      class: 'app-google-theme'
    }, {
      name: 'None',
      class: ''
    }
  ];

  selectedTheme: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedTheme = this.themes[0].class;
  }

}
