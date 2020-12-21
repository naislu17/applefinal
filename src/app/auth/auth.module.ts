import {NgModule} from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from './auth.service';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [LoginComponent,
    RegisterComponent
  ],
})
export class AuthModule {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
