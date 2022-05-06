import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { CompetenceFonctionnel } from '../models/competence-fonctionnel';
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

    this.fonctionnels = [
      {id:"1",titre:"Titre 1",description:"Description 1"},
      {id:"2", titre:"Titre 2",description:"Description 2"}
    ];

    this.languages = ["C","C++","HTML5","JAVASCRIPT","OBJECTIVE-C","PL SQL","RUBY","SQL","TypeScript","C#","CSS","JAVA","PHP","PYTHON","SCALA","SWIFT","VISUAL BASIC"];
    this.selectedLanguages = ["JAVA", "JAVASCRIPT", "HTML5", "PYTHON", "PHP", "SQL", "TypeScript", "CSS"];
    
    this.frameworks = ["ANGULAR", "ASP.NET", "IONIC","JPA",".NET CORE 2","REACT.JS", "RUBY ON RAILS","SPRING BOOT","VueJS","ANGULARJS","HIBERNATE","J2EE",".NET","NODE.JS","SPRING","TWITTER BOOTSTRAP"];
    this.selectedFrameworks = ["ANGULAR", "ANGULARJS", "JPA", "HIBERNATE", "J2EE", "NODE.JS",
                        "REACT.JS", "REST", "SPRING", "SPRING BOOT", "TWITTER BOOTSTRAP"];

    this.selectedSgbd = ["MYSQL", "POSTGRESQL", "ORACLE", "SQL SERVER"];
    this.sgbd = ["MONGODB","NoSQL","POSTGRESQL","SQL SERVER","MARIADB","MYSQL","ORACLE","SQLITE"];

    this.selectedOs = ["WINDOWS", "MAC OS", "LINUX", "WINDOWS 10"];
    this.os = ["ANDROID","FEDORA","LINUX","UNIX","WINDOWS 10","DEBIAN","IOS","MAC OS","WINDOWS"];

    this.selectedOutils = ["GIT", "IntelliJ IDEA", "JENKINS", "JIRA", "MAVEN", "TOMCAT"];
    this.outils = ["ADOBE INDESIGN","GIT","IntelliJ IDEA", "JIRA","MAVEN","SAP","SELENIUM","SONARCUBE","TOMCAT","CAPELA","ILLUSTRATOR","JENKINS","MATLAB SIMULINK","QLIKVIEW","RHAPSODY","SCADE","SHAREPOINT","SYMFONY","VISUAL STUDIO","WIRESHARK"];

    this.selectedMethodes = ["SCRUM", "AGILE", "UML"];
    this.methodes = ["AGILE","CAO","KANBAN","MERISE","SCRUM","UML","BLOCKCHAIN","DEVOPS","LEAN MANAGEMENT","SAFe","UI DESIGN", "UX DESIGN"];

    this.selectedDevops = ["Kubernetes", "Docker"];
    this.devops = ["Ansible","Azure","GCP","KAFKA","Talend","APIGEE","Docker","Gravitee","Kubernetes"];
  }
    
}
