import { XhrInterceptor } from './xhr.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockSevice } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitService } from './produit/produit.service';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule


  ],

  providers: [
    ProduitMockSevice,
    ProduitService,
    AppService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : XhrInterceptor,
      multi : true
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
