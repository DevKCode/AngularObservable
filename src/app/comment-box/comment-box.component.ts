import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Input() count = 0;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count ++;
   // this.change.emit(this.count);
  }

  decrement() {
    this.count --;
    this.change.emit(this.count);
  }
  constructor(private _CommentService: CommentServiceService) { }

  ngOnInit() {

  }

}
