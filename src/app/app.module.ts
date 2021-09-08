import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RouterModule } from '@angular/router';
import { ActiveGGuard } from './active-g.guard';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [ActiveGGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'error',
        component: ErrorpageComponent
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    LoginComponent,
    ErrorpageComponent
  ],
  providers: [ActiveGGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
