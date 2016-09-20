import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseComponent } from './exercise/exercise.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'exercise',
        component: ExerciseComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);