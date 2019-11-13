import { Component, OnInit } from '@angular/core';
import { SaladService } from 'src/app/services/salad.service';

@Component({
  selector: 'app-salad-card',
  templateUrl: './salad-card.component.html',
  styleUrls: ['./salad-card.component.css']
})
export class SaladCardComponent implements OnInit {

  constructor(public salad:SaladService) { }

  ngOnInit() {
  }

}
