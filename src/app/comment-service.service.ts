import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CommentServiceService {
  private commentUrl = 'https://jsonplaceholder.typicode.com/comments/';

  constructor(private _http: Http) {}


  getComments(): Observable<Comment> {
    return this._http.get(this.commentUrl)
              .map(response => response.json())
              .catch(error => Observable.throw(error.json.error || 'serve error'));

  }
}
