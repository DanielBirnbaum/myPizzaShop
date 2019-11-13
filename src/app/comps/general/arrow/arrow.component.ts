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

  moveCardPage(mov: number, obj) {
    const Panel = this[obj];
    let newPanelIndex = this.getNewCuurentIndex(Panel[this.panel.currentpanelIndex], mov, Panel[this.panel.panels])
    Panel[this.panel.currentpanelIndex] = newPanelIndex;
    Panel[this.panel.currentpanel] = Panel[this.panel.panels][newPanelIndex];
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


  ngOnInit() {
  }

}
