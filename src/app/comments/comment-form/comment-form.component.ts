import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  commentForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      'user' : new FormControl('', [Validators.required]),
      'comment': new FormControl('', [Validators.required])
    });
  }
  onsubmit() {

      console.log('Submitted ' + this.commentForm.get('user').value);
  }

}
