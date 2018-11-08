import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const routesChildren: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: '' }
];

const routes: Routes = [
  { path: 'home', component: HomeComponent, children:  routesChildren}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRouingModule { }
