import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeListComponent } from './recepies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recepies/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recepies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Routes,RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
  path: '',
  component: RecepiesComponent,
  data: {
    id: 1,
    name: "Arshaq",
    age: 22
  },

},
  {
  path: 'shopping-list',
  component: ShoppingListComponent,
  data: {
    id: 2,
    name: "Rahim",
    age: 25
  },

},
  {
  path: 'recipes/details',
  component: RecipeDetailComponent,
  data: {
    id: 3,
    name: "RecipeDetailComponent",
    age: 55
  },

},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
