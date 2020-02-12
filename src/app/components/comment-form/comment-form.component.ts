import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentProperties } from '../../interfaces/comment-properties';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  commentForm: FormGroup;
  nameRegEx = '[\\w\\-\\s\\/]+';

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      authorName: new FormControl(null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.nameRegEx)
      ])),
      email: new FormControl(null, Validators.email),
      isEmailPublic: new FormControl(true),
      label: new FormControl(null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
      ])),
      content: new FormControl(null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
      ]))
    });
  }

  enrich(commentProperties: CommentProperties): CommentProperties {
    const enrichedCommentProperties = commentProperties;

    enrichedCommentProperties.id = this.contentService.getNewCommentId();
    enrichedCommentProperties.date = new Date().toDateString();

    return enrichedCommentProperties;
  }

  onSubmit(inputtedCommentProperties: CommentProperties): void {
    const enrichedCommentProperties = this.enrich(inputtedCommentProperties);
    this.contentService.updateComments(enrichedCommentProperties);
  }

}
