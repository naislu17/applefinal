import {SupportComponent} from '../support/support.component';

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IphoneComponent} from '../iphone/iphone.component';
import {MacComponent} from '../mac/mac.component';
import {PasswordComponent} from '../support/password/password.component';
import {RemontComponent} from '../support/remont/remont.component';
import {PowerComponent} from '../support/power/power.component';
import {G5Component} from '../support/g5/g5.component';
import {DeactivateGuard} from '../mac/deactivate-guard.service';
import {LoginComponent} from '../auth/login/login.component';
import {ReviewsComponent} from '../reviews/reviews.component';

const appRoutes: Routes = [
  {path: '', component: SupportComponent},
  {path: 'iphone', component: IphoneComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mac', component: MacComponent, canDeactivate: [DeactivateGuard]},
  {path: 'password', component: PasswordComponent},
  {path: 'remont', component: RemontComponent},
  {path: 'power', component: PowerComponent},
  {path: 'g5', component: G5Component},
  {path: 'reviews', component: ReviewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
