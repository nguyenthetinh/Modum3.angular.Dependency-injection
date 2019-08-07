import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

let viewChild: any;
// @ts-ignore
viewChild = ViewChild('tmpl');

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.scss']
})
export class ImgSlideComponent implements OnInit {
  @viewChild template: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
