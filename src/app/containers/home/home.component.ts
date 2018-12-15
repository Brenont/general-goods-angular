import { Component, OnInit, HostListener } from '@angular/core';
import { LANG } from '../../../theme/pt'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  public lang = LANG;
  public innerWidth;

  constructor() { }

  indexChanged(index) {
    console.log(index);
  }

  ngOnInit() {
  }

  slides = [
    { img: "../../../assets/img/eco.jpg", textOne: true, textTwo: false },
    { img: "../../../assets/img/isopor.jpg", textOne: false, textTwo: true },
    { img: "../../../assets/img/eco.jpg", textOne: true, textTwo: false },
    { img: "../../../assets/img/isopor.jpg", textOne: false, textTwo: true }
  ];

  slidesMobile = [
    { img: "../../../assets/img/eco-mob.jpg", textOne: true, textTwo: false },
    { img: "../../../assets/img/isopor-mob.jpg", textOne: false, textTwo: true },
    { img: "../../../assets/img/eco-mob.jpg", textOne: true, textTwo: false },
    { img: "../../../assets/img/isopor-mob.jpg", textOne: false, textTwo: true }
  ];


  slideConfig = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: false,
    nextArrow: false
  };
}

