import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'diet',
    templateUrl: 'app/dietTracker/diet.component.html'
})
export class DietComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}