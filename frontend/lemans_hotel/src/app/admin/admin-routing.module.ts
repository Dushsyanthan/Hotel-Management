import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { AddRoom } from './add-room/add-room';
import { AddOffer } from './add-offer/add-offer';
import { AddDish } from './add-dish/add-dish';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'add-room', component: AddRoom },
    { path: 'add-offer', component: AddOffer },
    { path: 'add-dish', component: AddDish }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
