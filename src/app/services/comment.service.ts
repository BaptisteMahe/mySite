import { Injectable } from '@angular/core';
import { CommentProperties } from '../interfaces/comment-properties';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: CommentProperties[] = [];
  commentObs: Observable<any>;

  constructor(private socket: Socket) { }

  getObservable(eventName: string): Observable<any> {
    return this.socket.fromEvent<any>(eventName);
  }

  // On the server
  getNewCommentId(): number {
    return this.comments.length;
  }

  addCommentProperties(commentProperties: CommentProperties): void {
    this.socket.emit('newComment', commentProperties);
  }
}
