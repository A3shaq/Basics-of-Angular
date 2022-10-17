import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  ingredients: Ingredient[] = [new Ingredient('Banana', 10), new Ingredient('Apple', 22)]
  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

}
