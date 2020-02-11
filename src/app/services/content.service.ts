import { Injectable } from '@angular/core';
import { SectionProperties } from '../interfaces/section-properties';
import { LinkProperties } from '../interfaces/link-properties';
import { IntroProperties } from '../interfaces/intro-properties';
import contentJSON from '../../assets/content.json';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  content: any = contentJSON;

  constructor() { }

  getSectionsProperties(): SectionProperties[] {
      return this.content.sections;
  }

  getLinksProperties(): LinkProperties[] {
    return this.content.links;
  }

  getIntroProperties(): IntroProperties {
    return this.content.intro;
  }
}
