import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  menu = {
    'starter': [
      { name: 'Soup', picture: '🥣'},
      { name: 'Salad', picture: '🥗'},
      { name: 'Pasta', picture: '🍝'}
    ],
    'main course': [
      { name: 'Meat', picture: '🍖'},
      { name: 'Chicken', picture: '🍗'},
      { name: 'Fish', picture: '🐟'},
    ],
    'dessert': [
      { name: 'Ice Cream', picture: '🍦'},
      { name: 'Pancakes', picture: '🥞'},
      { name: 'Cake', picture: '🍰'},
      ],
  }
  constructor() { }

  public load(kind:string): any[] {
    return this.menu[kind];
  }

}