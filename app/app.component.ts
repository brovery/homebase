import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/exercise" routerLinkActive="active">Exercise</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Home Base!';
}