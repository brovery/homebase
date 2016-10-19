import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { routing } from './app.routing';
import { ExerciseComponent } from './exercise/exercise.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {FoodstorageComponent} from "./foodStorage/foodStorage.component";
import {DietComponent} from "./dietTracker/diet.component";
import {BudgetComponent} from "./budget/budget.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {MealplannerComponent} from "./mealPlanner/mealPlanner.component";
import {ShoppinglistComponent} from "./shoppingList/shoppingList.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: [],
    declarations: [
        AppComponent,
        ExerciseComponent,
        DashboardComponent,
        FoodstorageComponent,
        DietComponent,
        BudgetComponent,
        CalendarComponent,
        MealplannerComponent,
        ShoppinglistComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}