import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // imageUrl : string = 'https://img.jamieoliver.com/jamieoliver/recipe-database/136295678.jpg?tr=w-800,h-1066'
  recipes: Recipe[] = [new Recipe("The Test Recipe", "Best things", 'https://img.jamieoliver.com/jamieoliver/recipe-database/136295678.jpg?tr=w-800,h-1066',),
  new Recipe("The Test Recipe", "Best things", 'https://img.jamieoliver.com/jamieoliver/recipe-database/136295678.jpg?tr=w-800,h-1066',)]
  constructor() { }

  ngOnInit(): void {
  }

}
