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
  minHeight = 70;
  verticalPos: number;

  constructor() { }

  ngOnInit() {
    this.scrollObs = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset)
    );

    this.scrollObs.subscribe(verticalPos => {
      this.verticalPos = Math.max(this.initialHeight / (verticalPos / 2 + 1), this.minHeight);
    });
  }
}
