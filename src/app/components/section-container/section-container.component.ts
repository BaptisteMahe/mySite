import { Component, OnInit } from '@angular/core';
import { SectionProperties } from '../../interfaces/section-properties';
import { StaticContentService } from '../../services/static-content.service';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  propertiesArray: SectionProperties[] = [];

  constructor(private staticContentService: StaticContentService) { }

  ngOnInit() {
    this.propertiesArray = this.staticContentService.getSectionsProperties();
  }

}
