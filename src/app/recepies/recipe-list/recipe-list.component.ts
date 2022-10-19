import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() hero = "test"
  // imageUrl : string = 'https://img.jamieoliver.com/jamieoliver/recipe-database/136295678.jpg?tr=w-800,h-1066'
  recipes: Recipe[] = [new Recipe("The Test Recipe", "Best things", 'https://img.jamieoliver.com/jamieoliver/recipe-database/136295678.jpg?tr=w-800,h-1066',),
  new Recipe("The Test Recipe", "Best things", 'https://img.jamieoliver.com/jamieoliver/recipe-database/136295678.jpg?tr=w-800,h-1066',)]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectToDetails(): void {
   //for redirect logic
   this.router.navigateByUrl('/recipes/details')
  //  this.router.
  }

  goBack(){
    // this._location.go();
  }

}
