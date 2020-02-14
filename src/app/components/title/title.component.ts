import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable} from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  scrollObs: Observable<any>;
  initialHeight = 100;
  verticalPos: number;


  constructor() { }

  ngOnInit() {
    // Ask about Observables and pipe of those.
    this.scrollObs = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset)
    );

    this.scrollObs.subscribe(verticalPos => {
      this.verticalPos = this.initialHeight / (verticalPos / 2 + 1);
    });
  }

}
