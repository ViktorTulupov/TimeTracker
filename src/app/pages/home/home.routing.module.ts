import { LoggedUserGuard } from './../../components/logged-user/logged-user.guard';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './time-tracker/calendar/calendar.component';
import { TimeTrackerComponent  } from './time-tracker/time-tracker.component';

const routesChildren: Routes = [
  { path: 'calendar', component: CalendarComponent, canActivate: [LoggedUserGuard]},
  { path: 'tracker', component: TimeTrackerComponent, canActivate: [LoggedUserGuard]},
  { path: '**', redirectTo: 'tracker' }
];

const routes: Routes = [
  { path: 'home', component: HomeComponent, children:  routesChildren, canActivate: [LoggedUserGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRouingModule { }
