import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, merge } from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged, mapTo, startWith } from 'rxjs/operators';
import { StaticContentService } from '../../services/static-content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollObs: Observable<State>;
  state: State = State.Top;

  properties: any;
  languageObs: Observable<string>;

  constructor(private staticContentService: StaticContentService) { }

  ngOnInit() {
    this.scrollObs = this.createScrollObs();
    this.scrollObs.subscribe(state => {
      this.state = state;
    });

    this.languageObs = this.createLanguageObs();
    this.staticContentService.setLanguageObs(this.languageObs);
    this.languageObs.subscribe(language => {
      this.properties = this.staticContentService.getHeaderProperties(language);
    });
  }

  createScrollObs(): Observable<State> {
    const scrollObs = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([yPosBefore, yPosAfter]): State => (this.computeState(yPosBefore, yPosAfter))),
      distinctUntilChanged()
    );
    return scrollObs;
  }

  createLanguageObs(): Observable<string> {
    const englishObs = fromEvent(document.querySelector('#englishButton'), 'click');
    const frenchObs = fromEvent(document.querySelector('#frenchButton'), 'click');
    const mergedObs = merge(englishObs.pipe(mapTo('english')), frenchObs.pipe(mapTo('french')));
    return mergedObs.pipe(startWith('english'), distinctUntilChanged());
  }

  computeState(yPosBefore: number, yPosAfter: number): State {
    if (yPosAfter === 0) {
      return State.Top;
    } else if (yPosAfter <= yPosBefore) {
      return State.Up;
    } else {
      return State.Down;
    }
  }
}

enum State {
  Top = 'top',
  Up = 'up',
  Down = 'down'
}

