import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.css']
})
export class MenuBlockComponent implements OnInit {

  @Input() kind: string;
  @Input() dishlistTemplate: TemplateRef<any>;
  dishes: any[];  

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.dishes = this.menuService.load(this.kind);
  }
}