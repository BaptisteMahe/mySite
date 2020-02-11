import { Component, OnInit } from '@angular/core';
import { SectionProperties } from '../../interfaces/section-properties';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  sectionContentArray: SectionProperties[] = [];

  constructor() { }

  ngOnInit() {
    const sectionsContentFromJson = require('../../../assets/content.json').sections;
    sectionsContentFromJson.forEach(element => {
      this.sectionContentArray.push(element);
    });
  }

}
