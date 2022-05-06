import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Constants } from '../models/constants';
import { Cv } from '../models/cv';
import { Experience } from '../models/experience';
import { Formation } from '../models/formation';
import { Langue } from '../models/langue';

@Component({
  selector: 'app-cv-tech',
  templateUrl: './cv-tech.component.html',
  styleUrls: ['./cv-tech.component.css']
})
export class CvTechComponent implements OnInit {
  
  cv: Cv = {} as Cv;
  experiences: Array<Experience> = [];
  formations: Array<Formation> = [];
  langues: Array<Langue> = [];
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    const idCv = "1";
    this.cvService.getCvById(idCv).subscribe(data => {
      if (data.code === Constants.SUCCES_CODE){
        this.cv = <Cv>data.resultat[0];
      }
    });

    this.cvService.getCvExperiences(idCv).subscribe(data => {
      if (data.code === Constants.SUCCES_CODE){
        this.experiences = <Array<Experience>>data.resultat;
      }
    });

    this.cvService.getCvFormations(idCv).subscribe(data => {
      if (data.code === Constants.SUCCES_CODE){
        this.formations = <Array<Formation>>data.resultat;
      }
    });

    this.cvService.getCvLangues(idCv).subscribe(data => {
      if (data.code === Constants.SUCCES_CODE){
        this.langues = <Array<Langue>>data.resultat;
      }
    });
  }

}
