import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { routing } from './app.routing';
import { ExerciseComponent } from './exercise/exercise.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

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
        DashboardComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}