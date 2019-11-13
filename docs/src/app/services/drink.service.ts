import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor() { }
  drinks=[
    {name:"Coca cola",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246932_636802109701353983.jpg",price:"8",nis:"₪"},
    {name:"Sprite",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246934_636802110445000472.jpg",price:"8",nis:"₪"},
    {name:"Fanta",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246935_636802110535115842.jpg",price:"8",nis:"₪"},
    {name:"Fuze tea",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246936_636802110607127280.jpg",price:"10",nis:"₪"}
   
  ]
  currentdrinkIndex = 0
  currentdrink = this.drinks[this.currentdrinkIndex]
}
