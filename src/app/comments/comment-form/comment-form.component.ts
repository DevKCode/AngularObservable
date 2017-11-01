import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { CommentServiceService} from '../../comment-service.service';
import {Comment} from '../../comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  commentForm: FormGroup;
  newComment: Comment;

  constructor(private _commentService: CommentServiceService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      'user' : new FormControl('', [Validators.required]),
      'comment': new FormControl('', [Validators.required])
    });
  }
  onsubmit() {
       this.newComment = new Comment(1450, 450, this.commentForm.get('user').value, 'dev@g.lk',  this.commentForm.get('comment').value);
      console.log('Rest submision');
      this._commentService.postComments(this.newComment).subscribe(
        (res: Response) => {
          console.log(res);
        }
      );

  }

}
