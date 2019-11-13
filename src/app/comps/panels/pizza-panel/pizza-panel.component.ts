import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-panel',
  templateUrl: './pizza-panel.component.html',
  styleUrls: ['./pizza-panel.component.css']
})
export class PizzaPanelComponent implements OnInit {

  constructor(public pizzaSvc:PizzaService) {}

  ngOnInit() {
  }

}
