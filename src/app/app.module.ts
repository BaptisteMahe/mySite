import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './title/title.component';
import { SectionContainerComponent } from './section-container/section-container.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { LinkContainerComponent } from './link-container/link-container.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SectionContainerComponent,
    SectionComponent,
    FooterComponent,
    LinkContainerComponent,
    ContactComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
