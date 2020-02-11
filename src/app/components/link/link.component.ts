import { Component, OnInit, Input } from '@angular/core';
import { LinkProperties } from '../../interfaces/link-properties';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input()
  linkProperties: LinkProperties;

  constructor() { }

  ngOnInit() {
  }

}
