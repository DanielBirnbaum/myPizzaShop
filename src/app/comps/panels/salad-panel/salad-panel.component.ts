import { Component, OnInit } from '@angular/core';
import { SaladService } from 'src/app/services/salad.service';


@Component({
  selector: 'app-salad-panel',
  templateUrl: './salad-panel.component.html',
  styleUrls: ['./salad-panel.component.css']
})
export class SaladPanelComponent implements OnInit {

  constructor(public saladSvc:SaladService) { }

  ngOnInit() {
  }

}
