import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';

const appRoutes:Routes=[
  {
    path:"",component:QuotesAppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuotesAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
