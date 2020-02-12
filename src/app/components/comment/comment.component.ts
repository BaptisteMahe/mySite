import { Component, OnInit, Input } from '@angular/core';
import { CommentProperties } from '../../interfaces/comment-properties';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  commentProperties: CommentProperties;

  constructor() { }

  ngOnInit() {
  }

  isEmailDisplayed() {
    return this.commentProperties.email && this.commentProperties.isEmailPublic;
  }
}
