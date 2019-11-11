import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.css']
})
export class MenuBlockComponent implements OnInit {

  dishes: any[];
  @Input() kind: string;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.dishes = this.menuService.load(this.kind);
  }

}