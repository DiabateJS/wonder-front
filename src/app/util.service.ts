import { Injectable } from '@angular/core';
import { Competence } from './models/competence';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  CompetencesToArray(data: Array<Competence>): Array<string> {
    let tab: Array<string> = [];
    data.forEach((elt: Competence) => {
      tab.push(elt.libelle);
    });
    return tab;
  }
}
