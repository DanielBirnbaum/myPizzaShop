import { Component, OnInit } from '@angular/core';
import { PasteryService } from 'src/app/services/pastery.service';

@Component({
  selector: 'app-pastery-panel',
  templateUrl: './pastery-panel.component.html',
  styleUrls: ['./pastery-panel.component.css']
})
export class PasteryPanelComponent implements OnInit {

  constructor(public pasterySvc:PasteryService) { }

  ngOnInit() {
  }

}
