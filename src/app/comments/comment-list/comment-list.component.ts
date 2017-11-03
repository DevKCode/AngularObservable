import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {CommentServiceService} from '../../comment-service.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments;
  @Output() getClickedComment: EventEmitter<number> = new EventEmitter<number>();
  constructor(private _commmentService: CommentServiceService) { }

  ngOnInit() {
     this._commmentService.getComments().subscribe(
       (response) => {
          this.comments = response.slice(0, 3);

       }
     );
  }

  getClickedInfo(id) {
 console.log('emitter value' + id);
 this.getClickedComment.emit(id);
//  this._commmentService.deleteCommment(id).subscribe(
//    (res: Response) => {
//      console.log(res);
//    }
//  );
  }

}
