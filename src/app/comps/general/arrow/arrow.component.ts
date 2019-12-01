import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { DrinkService } from 'src/app/services/drink.service';
import { SaladService } from 'src/app/services/salad.service';
import { PasteryService } from 'src/app/services/pastery.service';
import { PagingService } from 'src/app/services/paging.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  constructor(public pizzaArr: PizzaService, public drinkArr: DrinkService, public saladArr: SaladService, public pasteryArr: PasteryService, public panel: PagingService) { }

  itemPrice=0
  thisSvc=''

  // moveCardPage(mov: number, obj:string) {    
  //   //obj is namve of a service paramenter, for ex "pizzaArr"
  //   this.thisSvc = this[obj]; // this is the service, ex PizzaService
  //   const thisSvc=this.thisSvc
  //   let newPanelIndex = this.getNewCuurentIndex(thisSvc[this.panel.currentpanelIndex], mov, thisSvc[this.panel.panels])
  //   thisSvc[this.panel.currentpanelIndex] = newPanelIndex;
  //   thisSvc[this.panel.currentpanel] = thisSvc[this.panel.panels][newPanelIndex];
  //   this.itemPrice=thisSvc[this.panel.currentpanel].price;
  //   console.log(thisSvc[this.panel.currentpanel].price);
        
  // }

  total(){
    this.panel.totalPrice+=(this.itemPrice*1)
    console.log(this.panel.totalPrice);
    
  }

  // private getNewCuurentIndex(current: number, delta: number, array: {}[]): number {
  //   let max = array.length - 1;
  //   let newIndex = current + delta
  //   if (newIndex > max) {
  //     newIndex = 0
  //   }
  //   if (newIndex < 0) {
  //     newIndex = max
  //   }
  //   return newIndex
  // }


  ngOnInit() {
  }

}
