import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { Products2Component } from './products2/products2.component';
import { AdminproductdetailsComponent } from './adminproductdetails/adminproductdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    CartComponent,
    ContactComponent,
    HeaderComponent,
    PagenotfoundComponent,
    FooterComponent,
    PaymentComponent,
    LoginComponent,
    AboutComponent,
    Products2Component,
    AdminproductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
