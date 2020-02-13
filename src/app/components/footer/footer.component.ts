import { Component, OnInit } from '@angular/core';
import { LinkProperties } from '../../interfaces/link-properties';
import { StaticContentService } from '../../services/static-content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  linkPropertiesArray: LinkProperties[] = [];

  constructor(private staticContentService: StaticContentService) { }

  ngOnInit() {
    this.linkPropertiesArray = this.staticContentService.getLinksProperties();
  }

}
