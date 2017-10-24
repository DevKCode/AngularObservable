import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CommentServiceService {
  private commentUrl = 'https://jsonplaceholder.typicode.com/comments/';

  constructor(_http: Http) {}
}
