import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home),
        canActivate: [authGuard]
    },
    {
        path: 'rooms',
        loadComponent: () => import('./rooms/rooms').then(m => m.Rooms),
        canActivate: [authGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    },
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup').then(m => m.Signup)
    }
];
