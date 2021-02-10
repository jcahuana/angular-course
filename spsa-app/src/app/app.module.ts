import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Services
import { PortfolioService } from './services/portfolio.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrandsComponent } from './components/brands/brands.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    BrandsComponent,
    PortfolioComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
