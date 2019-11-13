import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaladService {

  constructor() { }
  salads = [
    { name: "Greek salad", img: "https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246929_636802109111129667.jpg", price: "38", nis: "₪" },
    { name: "Tuna salad", img: "https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6246930_636802109235623464.jpg", price: "40", nis: "₪" },
    { name: "Israli salad", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivvybxpUG2c6IaM9SMkZ6ZPKEhQbvn3TM02es-aRndnZX8IMtCg&s", price: "34", nis: "₪" },
    { name: "Green salad", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5I9SNP6RU1CZQUHIXY8brRiF6gm4YoP20sfFPa5f0kNwRpVI2Og&s", price: "37", nis: "₪" }
  ]
  currentsaladIndex = 0
  currentsalad = this.salads[this.currentsaladIndex]
}
