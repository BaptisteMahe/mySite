import { Injectable } from '@angular/core';
import { SectionProperties } from '../interfaces/section-properties';
import { LinkProperties } from '../interfaces/link-properties';
import { IntroProperties } from '../interfaces/intro-properties';
import { CommentProperties } from '../interfaces/comment-properties';

import contentJSON from '../../assets/content.json';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  content: any = contentJSON;

  constructor() { }

  getSectionsProperties(): SectionProperties[] {
      return this.content.sections;
  }

  getLinksProperties(): LinkProperties[] {
    return this.content.links;
  }

  getIntroProperties(): IntroProperties {
    return this.content.intro;
  }

  getCommentsProperties(): CommentProperties[] {
    return this.content.comments;
  }

  // ONLY FOR NOW
  getNewCommentId(): number {
    return this.content.comments.length;
  }

  // ONLY FOR NOW
  addCommentProperties(commentProperties: CommentProperties): void {
    this.content.comments.push(commentProperties);
  }

  deleteCommentProperties(commentProperties: CommentProperties): void {
    const index = this.content.comments.indexOf(commentProperties);
    if (index >= 0) {
      this.content.comments.splice(index, 1);
    }
  }
}
