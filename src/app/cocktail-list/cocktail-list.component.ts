import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit{

  public cocktails: any = [];

  constructor(private cockatilList: CocktailServiceService) { } 



  ngOnInit(): void {
      this.cocktails = this.cockatilList.getCocktails();;
  }
}
