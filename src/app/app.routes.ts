import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { FlightComponent } from './flight/flight';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'flight/:id', component: FlightComponent },
    { path: '**', redirectTo: '' }
];

