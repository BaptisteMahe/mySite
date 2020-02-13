import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentProperties } from '../../interfaces/comment-properties';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  form: FormGroup;
  nameRegEx = '[\\w\\-\\s\\/]+';

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.form = new FormGroup({
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

  enrich(properties: CommentProperties): CommentProperties {
    const enrichedProperties = properties;

    enrichedProperties.id = this.commentService.getNewCommentId();
    enrichedProperties.date = new Date().toDateString();

    return enrichedProperties;
  }

  onSubmit(inputtedProperties: CommentProperties): void {
    const enrichedProperties = this.enrich(inputtedProperties);
    this.commentService.addCommentProperties(enrichedProperties);
  }

}
