import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import {CommentServiceService} from './comment-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CommentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
