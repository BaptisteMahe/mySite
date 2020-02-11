import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor. Nullam scelerisque arcu vitae dignissim viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut tellus elit, rhoncus id odio at, elementum tincidunt turpis. Sed in lacus pretium, ultrices nunc sagittis, convallis ante. Morbi gravida, metus sit amet mattis posuere, turpis urna porta sapien, non cursus mauris elit ac ipsum. Suspendisse tempus, lectus quis auctor dictum, turpis nisl mollis ipsum, posuere tincidunt est sem blandit lacus. Nullam maximus eget nibh tincidunt facilisis. Donec mattis dui sed dapibus porta.';

  sectionContentArray = [{
    label: 'Introduction to the site',
    imageUrl: '../../assets/img-example.png',
    paragraph: this.lorem
  }, {
    label: 'Projects',
    imageUrl: '../../assets/img-example.png',
    paragraph: this.lorem
  }, {
    label: 'Professional experiences',
    imageUrl: '../../assets/img-example.png',
    paragraph: this.lorem
  }, {
    label: 'Education',
    imageUrl: '../../assets/img-example.png',
    paragraph: this.lorem
  }, {
    label: 'Personal',
    imageUrl: '../../assets/img-example.png',
    paragraph: this.lorem
  }];

  constructor() { }

  ngOnInit() { }

}
