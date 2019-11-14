import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
pizzas=[
  {name:"Regular pizza",img:"https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246911_636802107032728557.jpg",price:"58",nis:"₪"},
  {name:"Olive pizza",img:"https://files.mishloha.co.il/files/menu_food_pic/91120147493663.jpg",price:"65",nis:"₪"},
  {name:"Mashroom pizza",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9E-K8P2ZDsHa6Obh43cWS9fg0e8w7nHF-87_dhkqXxJceocQ&s",price:"65",nis:"₪"},
  {name:"Extra cheese pizza",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyy7N1mLJVhI9nT0jNT3O0ilp7SDEU8P0Y7PMfidnMRN8CmT1&s',price:"68",nis:"₪"}
];
currentpizzaIndex=0
currentpizza = this.pizzas[this.currentpizzaIndex]

}
