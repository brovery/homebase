import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'foodStorage',
    templateUrl: 'app/foodStorage/foodStorage.component.html'
})
export class FoodstorageComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}