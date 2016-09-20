import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'exercise',
    templateUrl: 'app/exercise/exercise.component.html'
})
export class ExerciseComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}