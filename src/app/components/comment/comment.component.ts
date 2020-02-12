import { Component, OnInit, Input } from '@angular/core';
import { CommentProperties } from '../../interfaces/comment-properties';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  properties: CommentProperties;

  constructor() { }

  ngOnInit() {
  }

  isEmailDisplayed() {
    return this.properties.email && this.properties.isEmailPublic;
  }
}
