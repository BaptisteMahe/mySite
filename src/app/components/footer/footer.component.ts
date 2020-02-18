import { Component, OnInit } from '@angular/core';
import { LinkProperties } from '../../interfaces/link-properties';
import { StaticContentService } from '../../services/static-content.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  linkPropertiesArray: LinkProperties[] = [];
  languageObs: Observable<string>;

  constructor(private staticContentService: StaticContentService) { }

  ngOnInit() {
    this.languageObs = this.staticContentService.getLanguageObs();
    this.languageObs.subscribe(language => {
      this.linkPropertiesArray = this.staticContentService.getLinksProperties(language);
    });

  }

}
