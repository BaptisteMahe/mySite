import { Component, OnInit } from '@angular/core';
import { CommentProperties } from '../../interfaces/comment-properties';
import { CommentService } from '../../services/comment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {

  propertiesArray: CommentProperties[] = [];
  commentObs: Observable<CommentProperties[]>;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentObs = this.commentService.getCommentObservable();
    this.commentObs.subscribe((comments) => {
      this.propertiesArray = comments;
    });
  }

}
