import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRideComponent } from './book-ride/book-ride.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'book', component: BookRideComponent },
  { path: 'detail', component: RideDetailsComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
