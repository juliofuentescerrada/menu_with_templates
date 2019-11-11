import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-block-title',
  templateUrl: './menu-block-title.component.html',
  styleUrls: ['./menu-block-title.component.css']
})
export class MenuBlockTitleComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}