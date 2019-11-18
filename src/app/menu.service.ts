import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  menu = {
    'starter': [
      { name: 'Soup', picture: '🥣', price: 3.99},
      { name: 'Salad', picture: '🥗', price: 3.99},
      { name: 'Pasta', picture: '🍝', price: 3.99}
    ],
    'main course': [
      { name: 'Meat', picture: '🍖', price: 6.99},
      { name: 'Chicken', picture: '🍗', price: 6.99},
      { name: 'Fish', picture: '🐟', price: 6.99},
    ],
    'dessert': [
      { name: 'Ice Cream', picture: '🍦', price: 2.99},
      { name: 'Pancakes', picture: '🥞', price: 2.99},
      { name: 'Cake', picture: '🍰', price: 2.99},
      ],
  }
  
  constructor() { }

  public load(kind:string): any[] {
    return this.menu[kind];
  }

}