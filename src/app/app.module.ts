import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { InfoComponent } from './info/info.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CompetencesTechniquesComponent } from './competences-techniques/competences-techniques.component';
import { CompetencesFonctionnellesComponent } from './competences-fonctionnelles/competences-fonctionnelles.component';
import { ExperiencesProComponent } from './experiences-pro/experiences-pro.component';
import { FormationsComponent } from './formations/formations.component';
import { LanguesComponent } from './langues/langues.component';
import { CartesCvComponent } from './cartes-cv/cartes-cv.component';
import { FormsModule } from '@angular/forms';
import { CvTechIntroComponent } from './cv-tech-intro/cv-tech-intro.component';

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
    ContactComponent,
    InfoComponent,
    ExperiencesComponent,
    CompetencesTechniquesComponent,
    CompetencesFonctionnellesComponent,
    ExperiencesProComponent,
    FormationsComponent,
    LanguesComponent,
    CartesCvComponent,
    CvTechIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
