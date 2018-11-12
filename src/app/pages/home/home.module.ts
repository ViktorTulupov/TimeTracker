import { TimeTrackerModule } from './time-tracker/time-tracker.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouingModule } from './home.routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRouingModule,
    TimeTrackerModule
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule { }
