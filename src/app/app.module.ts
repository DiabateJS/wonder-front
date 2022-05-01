import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CvTechComponent } from './cv-tech/cv-tech.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParticulierComponent } from './particulier/particulier.component';
import { AcademyComponent } from './academy/academy.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CvTechComponent,
    AboutUsComponent,
    EntrepriseComponent,
    ParticulierComponent,
    AcademyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
