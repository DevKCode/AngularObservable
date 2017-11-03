import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { CommentServiceService} from '../../comment-service.service';
import {Comment} from '../../comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit, OnChanges {

  @Input() clickedId;
  private _name;
  commentForm: FormGroup;
  newComment: Comment;
  newClickedId;
  editComment;

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Current ' + changes.clickedId.currentValue);
    console.log('Previou : ' + changes.clickedId.previousValue);
      if (changes.clickedId.currentValue) {
         this.newClickedId = changes.clickedId.currentValue;
        this._commentService.getComment(changes.clickedId.currentValue).subscribe(
             (res) => {
               this.editComment = res;
               console.log(res);
             }
        );

          this.commentForm = new FormGroup({
            'user' : new FormControl(this.editComment.email, [Validators.required]),
            'comment': new FormControl(this.editComment.body, [Validators.required])
          });
      }
  }


}
