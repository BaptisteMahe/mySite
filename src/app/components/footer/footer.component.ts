import { Component, OnInit } from '@angular/core';
import { LinkProperties } from '../../interfaces/link-properties';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  linkPropertiesArray: LinkProperties[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.linkPropertiesArray = this.contentService.getLinksProperties();
  }

}
