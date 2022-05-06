import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Competence } from '../models/competence';
import { CompetenceFonctionnel } from '../models/competence-fonctionnel';
import { Constants } from '../models/constants';
import { Cv } from '../models/cv';
import { Experience } from '../models/experience';
import { Formation } from '../models/formation';
import { Langue } from '../models/langue';
import { UtilService } from '../util.service';

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
  fonctionnels: Array<CompetenceFonctionnel> = [];
  languages: Array<string> = [];
  selectedLanguages: Array<string> = [];
  frameworks: Array<string> = [];
  selectedFrameworks: Array<string> = [];
  selectedSgbd: Array<string> = [];
  sgbd: Array<string> = [];
  selectedOs: Array<string> = [];
  os: Array<string> = [];
  outils: Array<string> = [];
  selectedOutils: Array<string> = [];
  methodes: Array<string> = [];
  selectedMethodes: Array<string> = [];
  devops: Array<string> = [];
  selectedDevops: Array<string> = [];

  constructor(private cvService: CvService, private utilService: UtilService) { }

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

    this.cvService.getReferenceCompetences().subscribe(data => {
      const res: any = data.resultat;
      if (data.code === Constants.SUCCES_CODE){
        this.languages = this.utilService.CompetencesToArray(res.languages);
        this.frameworks = this.utilService.CompetencesToArray(res.frameworks);
        this.sgbd = this.utilService.CompetencesToArray(res.sgbd);
        this.os = this.utilService.CompetencesToArray(res.os);
        this.outils = this.utilService.CompetencesToArray(res.outils);
        this.methodes = this.utilService.CompetencesToArray(res.methodes);
        this.devops = this.utilService.CompetencesToArray(res.devops);
      }
    });

    this.fonctionnels = [
      {id:"1",titre:"Titre 1",description:"Description 1"},
      {id:"2", titre:"Titre 2",description:"Description 2"}
    ];

    this.selectedLanguages = ["JAVA", "JAVASCRIPT", "HTML5", "PYTHON", "PHP", "SQL", "TypeScript", "CSS"];

    this.selectedFrameworks = ["ANGULAR", "ANGULARJS", "JPA", "HIBERNATE", "J2EE", "NODE.JS",
                        "REACT.JS", "REST", "SPRING", "SPRING BOOT", "TWITTER BOOTSTRAP"];

    this.selectedSgbd = ["MYSQL", "POSTGRESQL", "ORACLE", "SQL SERVER"];

    this.selectedOs = ["WINDOWS", "MAC OS", "LINUX", "WINDOWS 10"];

    this.selectedOutils = ["GIT", "IntelliJ IDEA", "JENKINS", "JIRA", "MAVEN", "TOMCAT"];

    this.selectedMethodes = ["SCRUM", "AGILE", "UML"];

    this.selectedDevops = ["Kubernetes", "Docker"];
  }
    
}
