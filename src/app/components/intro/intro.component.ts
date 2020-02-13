import { Component, OnInit } from '@angular/core';
import { IntroProperties } from '../../interfaces/intro-properties';
import { StaticContentService } from '../../services/static-content.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  properties: IntroProperties;

  constructor(private staticContentService: StaticContentService) { }

  ngOnInit() {
    this.properties = this.staticContentService.getIntroProperties();
  }

}
