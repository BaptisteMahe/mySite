import { Injectable } from '@angular/core';
import { CommentProperties } from '../interfaces/comment-properties';
import { Socket } from 'ngx-socket-io';
import { Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentArray: CommentProperties[] = [];
  commentObs: Observable<CommentProperties[]>;


  constructor(private socket: Socket) {
    this.commentObs = this.createCommentObs();
   }

  getCommentObservable(): Observable<CommentProperties[]> {
    return this.commentObs;
  }

  sendCommentProperties(commentProperties: CommentProperties): void {
    this.socket.emit('newComment', commentProperties);
  }

  private createCommentObs(): Observable<CommentProperties[]> {
    const connectionObs = this.createConnectionObs();
    const addCommentObs = this.createAddCommentObs();
    const deleteCommentObs = this.createDeleteCommentObs();

    return merge(connectionObs, addCommentObs, deleteCommentObs);
  }

  private createConnectionObs(): Observable<CommentProperties[]> {
    const connectionObs = this.createSocketObservableFrom('connection')
      .pipe(
        map(commentProperties => {
          commentProperties.forEach(commentPorperty => {
            this.addCommentToArray(commentPorperty);
          });
          return this.commentArray;
        })
      );
    return connectionObs;
  }

  private createAddCommentObs(): Observable<CommentProperties[]> {
    const addCommentObs = this.createSocketObservableFrom('addComment')
      .pipe(
        map(newCommentProperty => {
          this.addCommentToArray(newCommentProperty);
          return this.commentArray;
        })
      );
    return addCommentObs;
  }

  private createDeleteCommentObs(): Observable<CommentProperties[]> {
    const deleteCommentObs = this.createSocketObservableFrom('deleteComment')
      .pipe(
        map(commentPropertyToDelete => {
          this.deleteCommentFromArray(commentPropertyToDelete);
          return this.commentArray;
        })
      );
    return deleteCommentObs;
  }

  private createSocketObservableFrom(eventName: string): Observable<any> {
    return this.socket.fromEvent<any>(eventName);
  }

  private addCommentToArray(commentProperties: CommentProperties): void {
    this.commentArray.push(commentProperties);
  }

  private deleteCommentFromArray(commentProperties: CommentProperties): void {
    const commentIndex = this.commentArray.indexOf(commentProperties);
    if (commentIndex > -1) {
      this.commentArray.slice(commentIndex, 1);
    } else {
      console.error('Wrong deleteComment query received : No such comment in commentArray', commentProperties);
    }
  }
}
