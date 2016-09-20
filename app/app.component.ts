import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1 class="row col-md-12">{{title}}</h1>
        <nav>
            <a class="btn btn-default" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a class="btn btn-default" routerLink="/exercise" routerLinkActive="active">Exercise</a>
        </nav>
        <router-outlet class="row col-md-12"></router-outlet>
    `
})
export class AppComponent {
    title = 'Home Base!';
}