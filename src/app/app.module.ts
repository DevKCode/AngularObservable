import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

import {CommentServiceService} from './comment-service.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentBoxComponent} from './comments/comment-box/comment-box.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CommentBoxComponent,
    CommentsComponent,
    CommentFormComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CommentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
