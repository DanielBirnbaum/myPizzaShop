import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  constructor() {
     console.log(this.myArr);
  }

  public panelName='pizza';
  public myArr='pizzaArr'
  public currentpanel='currentpizza'
  public currentpanelIndex='currentpizzaIndex'
  public panels='pizzas'
  
  
  
  
  
  

  
}
