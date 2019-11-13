import { Component, OnInit, Input, TemplateRef,ContentChild } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuTemplateDirective } from '../menu-template.directive';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.css']
})
export class MenuBlockComponent implements OnInit {

  @Input() kind: string;
  @Input() dishlistTemplate: TemplateRef<any>;
  @ContentChild(MenuTemplateDirective,{static:false}) contentTemplate: MenuTemplateDirective;

  dishes: any[];  

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.dishes = this.menuService.load(this.kind);
  }
}