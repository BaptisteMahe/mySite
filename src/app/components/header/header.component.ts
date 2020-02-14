import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable} from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollObs: Observable<any>;
  state: State = State.Top;

  constructor() { }

  ngOnInit() {
    this.scrollObs = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([yPosBefore, yPosAfter]): State => (this.computeState(yPosBefore, yPosAfter))),
      distinctUntilChanged()
    );


    this.scrollObs.subscribe(state => {
      this.state = state;
    });
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

