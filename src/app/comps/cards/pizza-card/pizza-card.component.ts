import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {

  constructor(public pizza:PizzaService) { }

  order(){}

  ngOnInit() {
  }

}
