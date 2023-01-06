import { Component } from '@angular/core';
import { listOfFood } from '../foodlist';
import { Food } from '../food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  food: Food[] = listOfFood;
  shoppingList: Food[] = [];
  price: number = 0;
  public AddToList(item: Food): void {
    this.shoppingList.push(item);
    this.price += item.Price;
  }
  public RemoveFromList(item: Food): void {
    this.shoppingList.splice(this.shoppingList.indexOf(item), 1);
    this.price -= item.Price;
  }
}
