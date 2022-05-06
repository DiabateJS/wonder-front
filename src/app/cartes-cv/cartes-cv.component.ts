import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-cartes-cv',
  templateUrl: './cartes-cv.component.html',
  styleUrls: ['./cartes-cv.component.css']
})
export class CartesCvComponent implements OnInit {
  cvs: Array<Cv> = [];
  languages: Array<string> = [];
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.languages = [
        "UI / UX",
				"Front End Development",
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Node"
    ];
    this.cvService.getCvs().subscribe(data => {
      this.cvs = <Array<Cv>>data.resultat;
    })
  }

}
