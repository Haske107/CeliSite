
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from "./landing/landing.component";

const   APP_ROUTES: Routes = [
    // Home Page Routes
    {path: '', redirectTo: '/Landing', pathMatch: 'full'},
    {path: 'Landing', component: LandingComponent},

];

export const AppRouter = RouterModule.forRoot(APP_ROUTES);
