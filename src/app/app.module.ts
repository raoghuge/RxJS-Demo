import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { StateManagementComponent } from './states/state-management/state-management.component';
import { StateListenerComponent } from './states/state-listener/state-listener.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SearchComponent,
    RandomNumberComponent,
    StateManagementComponent,
    StateListenerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
