import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path:'',component: MainComponent},
    {path:'signup',component:SignupComponent},
    { path: 'dashboard', component: DashboardComponent }
];
