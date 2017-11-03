import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Comment} from '../../comment';
import {CommentServiceService} from '../../comment-service.service';
import {EmitterServiceService} from '../../emitter-service.service';
@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

   @Input() commentInput: Comment;
   @Input() listId: string;
   @Input() editId: string;
   @Output() emitClick: EventEmitter<number> = new EventEmitter<number>();



  constructor(private _commmentService: CommentServiceService) { }

  ngOnInit() {
  }

   editComment(id) {
     console.log('edit comment' + id);
     this.emitClick.emit(id);
   }
   deleteComment(id) {

   }




}
