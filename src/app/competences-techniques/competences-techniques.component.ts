import { AstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences-techniques',
  templateUrl: './competences-techniques.component.html',
  styleUrls: ['./competences-techniques.component.css']
})
export class CompetencesTechniquesComponent implements OnInit {

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
  showLangages: boolean = false;
  showFrameworks: boolean = false;
  showSgbd: boolean = false;
  showOs: boolean = false;
  showOutils: boolean = false;
  showMethodes: boolean = false;
  showDevops: boolean = false;

  constructor() { }

  ngOnInit(): void {
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

  initShows() {
    this.showLangages = false;
    this.showFrameworks = false;
    this.showSgbd = false;
    this.showOs = false;
    this.showOutils = false;
    this.showMethodes = false;
    this.showDevops = false;
  }

  canShowLanguages(){
    this.initShows();
    this.showLangages = true;
  }

  canShowFrameworks(){
    this.initShows();
    this.showFrameworks = true;
  }

  canShowSgbd(){
    this.initShows();
    this.showSgbd = true;
  }

  canShowOs(){
    this.initShows();
    this.showOs = true;
  }

  canShowOutils(){
    this.initShows();
    this.showOutils = true;
  }

  canShowMethodes(){
    this.initShows();
    this.showMethodes = true;
  }

  canShowDevops(){
    this.initShows();
    this.showDevops = true;
  }

  validerCompetences(){
    this.initShows();
    
  }

  updateCheckedLanguages(lang: string, $event: any){
    const elementIndex = this.selectedLanguages.indexOf(lang);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedLanguages.push(lang);
      }
    }else{
      if (elementIndex != -1){
        this.selectedLanguages.splice(elementIndex,1);
      }
    }
  }

  updateCheckedFrameworks(framework: string, $event: any){
    const elementIndex = this.selectedFrameworks.indexOf(framework);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedFrameworks.push(framework);
      }
    }else{
      if (elementIndex != -1){
        this.selectedFrameworks.splice(elementIndex,1);
      }
    }
  }

  updateCheckedSgbd(lang: string, $event: any){
    const elementIndex = this.selectedSgbd.indexOf(lang);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedSgbd.push(lang);
      }
    }else{
      if (elementIndex != -1){
        this.selectedSgbd.splice(elementIndex,1);
      }
    }
  }

  updateCheckedOs(os: string, $event: any){
    const elementIndex = this.selectedOs.indexOf(os);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedOs.push(os);
      }
    }else{
      if (elementIndex != -1){
        this.selectedOs.splice(elementIndex,1);
      }
    }
  }

  updateCheckedOutils(outil: string, $event: any){
    const elementIndex = this.selectedOutils.indexOf(outil);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedOutils.push(outil);
      }
    }else{
      if (elementIndex != -1){
        this.selectedOutils.splice(elementIndex,1);
      }
    }
  }

  updateCheckedMethodes(methode: string, $event: any){
    const elementIndex = this.selectedMethodes.indexOf(methode);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedMethodes.push(methode);
      }
    }else{
      if (elementIndex != -1){
        this.selectedMethodes.splice(elementIndex,1);
      }
    }
  }

  updateCheckedDevops(dev: string, $event: any){
    const elementIndex = this.selectedDevops.indexOf(dev);
    if ($event.target.checked){
      if (elementIndex == -1){
          this.selectedDevops.push(dev);
      }
    }else{
      if (elementIndex != -1){
        this.selectedDevops.splice(elementIndex,1);
      }
    }
  }

}
