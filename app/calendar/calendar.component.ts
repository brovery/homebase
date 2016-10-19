import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'foodStorage',
    templateUrl: 'app/calendar/calendar.component.html'
})
export class CalendarComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}