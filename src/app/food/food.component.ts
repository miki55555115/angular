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
  multipliers: {[key: string]: number} = Object.fromEntries(listOfFood.map(food => [food.Name, 0]))
  
  public AddToList(item: Food): void {
    if (this.multipliers[item.Name] == 0) {
      this.shoppingList.push(item);
    }
    console.log(this.multipliers)
    this.price += item.Price;
    this.multipliers[item.Name] += 1;
  }
  public RemoveFromList(item: Food): void {
    if (this.multipliers[item.Name] == 1) {
      this.shoppingList.splice(this.shoppingList.indexOf(item), 1);
    }
    this.price -= item.Price;
    this.multipliers[item.Name] -= 1;
  }
}
