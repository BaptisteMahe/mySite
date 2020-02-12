import { Component, OnInit } from '@angular/core';
import { CommentProperties } from '../../interfaces/comment-properties';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {

  propertiesArray: CommentProperties[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.propertiesArray = this.contentService.getCommentsProperties();
  }

}
