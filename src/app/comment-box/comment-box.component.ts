import { Component, OnInit, Input } from '@angular/core';

import {CommentServiceService} from '../comment-service.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  @Input() comment: Comment;
  @Input() listId: string;
  @Input() editId: string;
  constructor(private _CommentService: CommentServiceService) { }

  ngOnInit() {

  }

}
