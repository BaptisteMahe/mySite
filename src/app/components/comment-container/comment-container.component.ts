import { Component, OnInit } from '@angular/core';
import { CommentProperties } from '../../interfaces/comment-properties';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {

  propertiesArray: CommentProperties[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.propertiesArray = this.commentService.getCommentsProperties();
  }

}
