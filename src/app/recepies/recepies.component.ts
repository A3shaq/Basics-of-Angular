import { Component, OnInit } from '@angular/core'; import { ActivatedRoute } from '@angular/router';
;

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  recipeDetails: {
    id: String,
    recipeName: String
  }
  data = "bruce"
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.recipeDetails = {
      id: this.route.snapshot.params['id'],
      recipeName: this.route.snapshot.params['recipeName'],

    }


    console.log(this.recipeDetails)
  }


}
