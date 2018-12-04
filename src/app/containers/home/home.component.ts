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

  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '1234567890'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };

}
  )}
