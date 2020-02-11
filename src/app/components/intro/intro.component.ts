import { Component, OnInit } from '@angular/core';
import { IntroProperties } from '../../interfaces/intro-properties';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  introProperties: IntroProperties;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.introProperties = this.contentService.getIntroProperties();
  }

}
