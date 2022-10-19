import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  recipeDetails: { id: string, recipeName: string }
  ngOnInit(): void {
    this.recipeDetails = {
      id: this.route.snapshot.params['id'],
      recipeName: this.route.snapshot.params['recipeName'],
    }
    console.log(this.recipeDetails)
    console.log(this.route.data);

    console.log("ngOnIt Runs");
    this.route.params.subscribe((data: Params) => {
      console.log("ngOnIt Runs subscribe");
      this.recipeDetails = {
        id: data['id'],
        recipeName: data['recipeName']
      }
    })
  }


}
