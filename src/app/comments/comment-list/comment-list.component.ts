import { Component, OnInit } from '@angular/core';

import {CommentServiceService} from '../../comment-service.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[];
  constructor(private _commmentService: CommentServiceService) { }

  ngOnInit() {
     this._commmentService.getComments().subscribe(
       (response) => {
          console.log(response);
       }
     );
  }

}
