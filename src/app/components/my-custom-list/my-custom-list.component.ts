import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-custom-list',
  templateUrl: './my-custom-list.component.html',
  styleUrls: ['./my-custom-list.component.scss']
})
export class MyCustomListComponent implements OnInit {

  list = ["item 1", "item 2", "item 3"];

  constructor() { }

  ngOnInit(): void {
  }

}
