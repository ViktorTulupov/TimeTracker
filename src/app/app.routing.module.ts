import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoggedUserGuard } from './components/logged-user/logged-user.guard';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [LoggedUserGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home/calendar' }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
