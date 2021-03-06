import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/intro/intro.component';
import { CommentComponent } from './components/comment/comment.component';
import { LinkComponent } from './components/link/link.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentContainerComponent } from './components/comment-container/comment-container.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CommentService } from './services/comment.service';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionContainerComponent,
    SectionComponent,
    FooterComponent,
    ContactComponent,
    IntroComponent,
    CommentComponent,
    LinkComponent,
    CommentFormComponent,
    CommentContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
