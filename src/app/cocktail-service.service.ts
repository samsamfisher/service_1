import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor() { }

  getCocktails() {
    return  [
      {
        name: 'Ti Punch',
        price: '4€',
        image: '../assets/img/tipunch.jpg'
      },
      {
        name: 'Sexe On The Beach',
        price: '6€',
        image: '../assets/img/sexe.jpg'
      },
      {
        name: 'Mojito',
        price: '8€',
        image: '../assets/img/mojito.jpg'
      }
    ]
  }

}
