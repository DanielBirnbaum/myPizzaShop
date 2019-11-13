import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasteryService {

  constructor() { }
  pasterys=[
    {name:"Garlic bread",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246922_636802107496726230.jpg",price:"24",nis:"₪"},
    {name:"Toast bagel",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/2910201329449611.jpg",price:"25",nis:"₪"},
    {name:"Melvah",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246919_636802107831206640.jpg",price:"24",nis:"₪"},
    {name:"Melvah pizza",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246920_636802108168687475.jpg",price:"28",nis:"₪"},

  ]
  currentpasteryIndex = 0
  currentpastery = this.pasterys[this.currentpasteryIndex]
}
