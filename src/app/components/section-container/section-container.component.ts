import { Component, OnInit } from '@angular/core';
import { SectionProperties } from '../../interfaces/section-properties';
import { StaticContentService } from '../../services/static-content.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  propertiesArray: SectionProperties[] = [];
  languageObs: Observable<string>;

  constructor(private staticContentService: StaticContentService) { }

  ngOnInit() {
    this.languageObs = this.staticContentService.getLanguageObs();
    this.languageObs.subscribe(language => {
      this.propertiesArray = this.staticContentService.getSectionsProperties(language);
    });
  }

}
