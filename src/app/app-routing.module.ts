import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcademyComponent } from './academy/academy.component';
import { CartesCvComponent } from './cartes-cv/cartes-cv.component';
import { ContactComponent } from './contact/contact.component';
import { CvTechComponent } from './cv-tech/cv-tech.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { HomeComponent } from './home/home.component';
import { ParticulierComponent } from './particulier/particulier.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'cv-tech/cv', component: CvTechComponent},
  {path:'cv-tech/cvs', component: CartesCvComponent},
  {path:'a-propos', component: AboutUsComponent},
  {path:'entreprise', component: EntrepriseComponent},
  {path:'particulier', component: ParticulierComponent},
  {path:'academy', component: AcademyComponent},
  {path:'contact', component: ContactComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
