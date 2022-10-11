import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  imageUrl : string = 'https://img.jamieoliver.com/jamieoliver/recipe-database/136295678.jpg?tr=w-800,h-1066'
  recipes: Recipe[] = [new Recipe("The Test Recipe", "Best things", this.imageUrl)]
  constructor() { }

  ngOnInit(): void {
  }

}
