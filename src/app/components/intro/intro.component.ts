import { Component, OnInit } from '@angular/core';
import { IntroProperties } from '../../interfaces/intro-properties';
import { StaticContentService } from '../../services/static-content.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  properties: IntroProperties;
  languageObs: Observable<string>;

  constructor(private staticContentService: StaticContentService) { }

  ngOnInit() {
    this.languageObs = this.staticContentService.getLanguageObs();
    this.languageObs.subscribe(language => {
      this.properties = this.staticContentService.getIntroProperties(language);
    });
  }

}
