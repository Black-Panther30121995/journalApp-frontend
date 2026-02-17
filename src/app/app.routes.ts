import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HomeComponent } from './pages/home/home.component';
import { JournalsComponent } from './pages/journals/journals.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { SettingComponent } from './pages/setting/setting.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [


  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: HomeComponent }, 
      { path: 'journals', component: JournalsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'settings', component: SettingComponent }
    ]
  },

  { path: '**', redirectTo: '' }

];
