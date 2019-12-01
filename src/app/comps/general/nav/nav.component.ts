import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/services/paging.service';
import { PizzaService } from 'src/app/services/pizza.service';
import { DrinkService } from 'src/app/services/drink.service';
import { SaladService } from 'src/app/services/salad.service';
import { PasteryService } from 'src/app/services/pastery.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public pizzaArr: PizzaService, public drinkArr: DrinkService, public saladArr: SaladService, public pasteryArr: PasteryService,public page:PagingService) { }

  ngOnInit() {
  }

  open_panel(panelName:string){
    this.page.panelName=panelName;
    this.page.myArr=this.page.panelName+'Arr';
    this.page.currentpanel='current'+this.page.panelName;
    this.page.currentpanelIndex='current'+this.page.panelName+'Index';
    this.page.panels=this.page.panelName+'s'
    this.page.totalPrice
  }

}
