import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  sectionContentArray = [{
    imageUrl: "../../assets/img-exemple.png",
    paragraph: "This is the content of the paragraph"
  }, {
    imageUrl: "../../assets/img-exemple.png",
    paragraph: "This is the content of the paragraph"
  }];

  constructor() { }

  ngOnInit() { }

}
