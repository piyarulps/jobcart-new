import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LetsGrowComponent } from './shared/lets-grow/lets-grow.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StaffingSolutionsComponent } from './component/staffing-solutions/staffing-solutions.component';
import { HomeComponent } from './component/home/home.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LetsGrowComponent,
    StaffingSolutionsComponent,
    HomeComponent,
    PricingComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
