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
  commentObs: Observable<any>;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getObservable('connection').subscribe((comments) => {
      console.log('Connected to the server');
      this.propertiesArray = comments.comments;
    });
  }

}
