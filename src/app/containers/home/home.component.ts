import { Component, OnInit } from '@angular/core';
import { LANG } from '../../../theme/pt'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  public lang = LANG;

  constructor() { }

  indexChanged(index) {
    console.log(index);
  }

  ngOnInit() {
  }

  slides = [
    {img: "../../../assets/img/eco.jpg"},
    {img: "../../../assets/img/isopor.jpg"},
    {img: "../../../assets/img/eco.jpg"},
    {img: "../../../assets/img/isopor.jpg"}
  ];
  slideConfig = {
    "dots": true,
    "slidesToShow": 1, 
    "slidesToScroll": 1
  };

  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}
  
