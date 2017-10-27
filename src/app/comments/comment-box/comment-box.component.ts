import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Comment} from '../../comment';
import {CommentServiceService} from '../../comment-service.service';
@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

   @Input() comment: Comment;
   @Input() listId: string;
   @Input() editId: string;

   myCount = 10;
  @Output() change1: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _commmentService: CommentServiceService) { }

  ngOnInit() {
  }

   editComment() {

   }
   deleteComment(id: string) {

   }


   increment() {
     this.myCount++;
     this.change1.emit(this.myCount);


   }
   decrement() {
    this.myCount--;
   }
}
