import { Injectable } from '@angular/core';
import { PasteryService } from './pastery.service';
import { SaladService } from './salad.service';
import { DrinkService } from './drink.service';
import { PizzaService } from './pizza.service';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  constructor(public pizzaArr: PizzaService, public drinkArr: DrinkService, public saladArr: SaladService, public pasteryArr: PasteryService) {
     console.log(this.myArr);
  }

  public panelName='pizza';
  public myArr='pizzaArr'
  public currentpanel='currentpizza'
  public currentpanelIndex='currentpizzaIndex'
  public panels='pizzas'
  public totalPrice=0;
  public  thisSvc=''
  public itemPrice=0
  
  moveCardPage(mov: number, obj:string) {    
    //obj is namve of a service paramenter, for ex "pizzaArr"
    this.myArr = this[obj]; // this is the service, ex PizzaService
    const thisSvc=this.myArr
    let newPanelIndex = this.getNewCuurentIndex(thisSvc[this.currentpanelIndex], mov, thisSvc[this.panels])
    thisSvc[this.currentpanelIndex] = newPanelIndex;
    thisSvc[this.currentpanel] = thisSvc[this.panels][newPanelIndex];
    this.itemPrice=thisSvc[this.currentpanel].price;
    console.log(thisSvc[this.currentpanel].price);
        
  }
  
  private getNewCuurentIndex(current: number, delta: number, array: {}[]): number {
    let max = array.length - 1;
    let newIndex = current + delta
    if (newIndex > max) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = max
    }
    return newIndex
  }
  

  
}
