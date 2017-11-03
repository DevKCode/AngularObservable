import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Comment} from './comment';

@Injectable()
export class CommentServiceService {
  private commentUrl = 'https://jsonplaceholder.typicode.com/comments/';

  constructor(private _http: Http) {}


  getComments(): Observable<Comment[]> {
    return this._http.get(this.commentUrl)
              .map(response => response.json())
              .take(5)
              .catch(error => Observable.throw(error.json.error || 'serve error'));

  }
  getComment(id): Observable<any> {
    return this._http.get(this.commentUrl + '/' + id)
                .map(response => response.json())
                .catch(error => Observable.throw(error.json.error || 'server error'));

  }
  postComments(newComment: Comment) {
    return this._http.post(this.commentUrl, newComment)
                 .map(response => response.json())
                 .catch(error => Observable.throw(error.json.error || 'server error'));
  }
  deleteCommment(id) {
    return this._http.delete(this.commentUrl + '/' + id)
                      .map(response => response.json())
                      .catch(error => Observable.throw(error.json.error || 'server error'));
  }
}
