import { Injectable } from '@angular/core';
import { SectionProperties } from '../interfaces/section-properties';
import { LinkProperties } from '../interfaces/link-properties';
import { IntroProperties } from '../interfaces/intro-properties';
import { Observable } from 'rxjs';

import englishContent from '../../assets/english-content.json';
import frenchContent from '../../assets/french-content.json';

@Injectable({
  providedIn: 'root'
})
export class StaticContentService {

  content: any = {
    english: englishContent,
    french: frenchContent
  };
  languageObs: Observable<string>;

  constructor() { }

  setLanguageObs(languageObs: Observable<string>) {
    this.languageObs = languageObs;
  }

  getLanguageObs(): Observable<string> {
    return this.languageObs;
  }

  getHeaderProperties(language: string): any  {
    return this.content[language].header;
  }

  getIntroProperties(language: string): IntroProperties {
    return this.content[language].intro;
  }

  getSectionsProperties(language: string): SectionProperties[] {
      return this.content[language].sections;
  }

  getLinksProperties(language: string): LinkProperties[] {
    return this.content[language].links;
  }
}
