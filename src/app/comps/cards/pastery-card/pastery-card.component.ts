import { Component, OnInit } from '@angular/core';
import { PasteryService } from 'src/app/services/pastery.service';

@Component({
  selector: 'app-pastery-card',
  templateUrl: './pastery-card.component.html',
  styleUrls: ['./pastery-card.component.css']
})
export class PasteryCardComponent implements OnInit {

  constructor(public pastery:PasteryService) { }

  ngOnInit() {
  }

}
