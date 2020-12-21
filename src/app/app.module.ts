import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SupportComponent } from './support/support.component';
import { IphoneComponent } from './iphone/iphone.component';
import { MacComponent } from './mac/mac.component';
import {PasswordComponent} from './support/password/password.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { RemontComponent } from './support/remont/remont.component';
import { PowerComponent } from './support/power/power.component';
import { G5Component } from './support/g5/g5.component';
import { AirComponent } from './mac/air/air.component';
import { Air2Component } from './mac/air2/air2.component';
import { Phone1Component } from './iphone/phone1/phone1.component';
import { Phone2Component } from './iphone/phone2/phone2.component';
import { Phone3Component } from './iphone/phone3/phone3.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupserviceService} from './support/supservice.service';
import {DeactivateGuard} from './mac/deactivate-guard.service';
import {AuthModule} from './auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './auth/auth.service';
import {UserService} from './auth/user.service';
import { ReviewsComponent } from './reviews/reviews.component';
import {LoggingService} from './reviews/logging.service';
import {AllserviceService} from './reviews/allservice.service';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SupportComponent,
    PasswordComponent,
    IphoneComponent,
    MacComponent,
    RemontComponent,
    PowerComponent,
    G5Component,
    AirComponent,
    Air2Component,
    Phone1Component,
    Phone2Component,
    Phone3Component,
    ReviewsComponent

  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule, ReactiveFormsModule,  AuthModule,  HttpClientModule],
  providers: [SupserviceService, DeactivateGuard, UserService, AuthenticationService, LoggingService, AllserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
