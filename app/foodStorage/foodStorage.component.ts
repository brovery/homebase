import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../data/data.service";
import {StoredFood} from "../data/data.config";

@Component({
    selector: 'foodStorage',
    templateUrl: 'app/foodStorage/foodStorage.component.html'
})
export class FoodstorageComponent implements OnInit {
    constructor(private router: Router, private dataService: DataService) {}
    storedFood: StoredFood[] = [];

    ngOnInit(): void {
        this.dataService.getStoredFood().then(storedFood => this.storedFood = storedFood);
    }
}