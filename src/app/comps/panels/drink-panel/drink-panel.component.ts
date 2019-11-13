import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-drink-panel',
  templateUrl: './drink-panel.component.html',
  styleUrls: ['./drink-panel.component.css']
})
export class DrinkPanelComponent implements OnInit {

  constructor(public drinkSvc:DrinkService) { }

  ngOnInit() {
  }

}
