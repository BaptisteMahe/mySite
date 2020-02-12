import { Component, OnInit } from '@angular/core';
import { CommentProperties } from '../../interfaces/comment-properties';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {

  commentPropertiesArray: CommentProperties[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.commentPropertiesArray = this.contentService.getCommentsProperties();
  }

}
