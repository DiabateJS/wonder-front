import { Component, OnInit } from '@angular/core';
import { CompetenceFonctionnel } from '../models/competence-fonctionnel';

@Component({
  selector: 'app-competences-fonctionnelles',
  templateUrl: './competences-fonctionnelles.component.html',
  styleUrls: ['./competences-fonctionnelles.component.css']
})
export class CompetencesFonctionnellesComponent implements OnInit {

  fonctionnels: Array<CompetenceFonctionnel> = [];
  constructor() { }

  ngOnInit(): void {
    this.fonctionnels = [
      {id:"1",titre:"Titre 1",description:"Description 1"},
      {id:"2", titre:"Titre 2",description:"Description 2"}
    ];
  }

}
