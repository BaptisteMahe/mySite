import { Component, OnInit } from '@angular/core';
import { SectionProperties } from '../../interfaces/section-properties';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  sectionPropertiesArray: SectionProperties[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.sectionPropertiesArray = this.contentService.getSectionsProperties();
  }

}
