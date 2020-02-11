import { Component, OnInit, Input } from '@angular/core';
import { SectionProperties } from '../../interfaces/section-properties';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {


  @Input()
  sectionProperties: SectionProperties;

  constructor() { }

  ngOnInit() { }

}
